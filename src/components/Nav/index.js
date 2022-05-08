import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FaceBookIcon from '@mui/icons-material/Facebook';
import { PactLogo } from '../../assets/images';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem
} from '@mui/material';


const pages = [
  { url: 'pricing', title: 'PRICING + PACKAGES' },
  { url: 'rightforyou', title: 'WHAT TYPE OF WEDDING IS RIGHT FOR ME' },
  { url: 'blog', title: 'BLOG & RESOURCES' },
  { url: 'about', title: 'ABOUT & FAQ' },
  { url: 'contact', title: 'CONTACT' },
  { url: 'portal', title: 'PORTAL' },
];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="absolute" color="appBar" sx={{ boxShadow: 0, pt: 1 }}>
      <Container maxWidth="100vw">
        <Toolbar disableGutters>
          <Typography
            component="div"
            sx={{ alignItems: 'left', mr: '8px', display: { xs: 'flex', md: 'flex' } }}
          >
            <Link to='/'>
              <img className="icon" src={PactLogo} alt="logo" />
            </Link>
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap', maxWidth: '800px' }}>
            {pages.map((page) => (
              <Button
                key={page.url}
                onClick={handleCloseNavMenu}
                sx={{ mx: '.5vw', display: 'flex', width: 'auto' }}
              >
                <Link to={page.url}><h3>{page.title}</h3></Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="Navigation Dropdown"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon sx={{ fontSize: '2rem'}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.url} onClick={handleCloseNavMenu}>
                  <Link to={page.url}>{page.title}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            component="div"
            sx={{ alignItems: 'right', display: { xs: 'none', md: 'flex' }, flexDirection: 'column', ml: 'auto' }}
          >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
              <a underline="none" target="_blank" rel="noreferrer" href='https://www.instagram.com/adventurepact/'>
                <InstagramIcon sx={{ display: 'flex', fontSize: '2rem' }} />
              </a>
              <a underline="none" target="_blank" rel="noreferrer" href='https://www.facebook.com/adventurepactelopements'>
                <FaceBookIcon sx={{ display: 'flex', fontSize: '2rem' }} />
              </a>
            </Box>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;