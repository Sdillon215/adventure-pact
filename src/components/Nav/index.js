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
  { url: 'rightforyou', title: 'WHAT TYPE OF WEDDING IS RIGHT FOR ME?' },
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
    <AppBar position="fixed" color="appBar" sx={{boxShadow: 0, pt: 1 }}>
      <Container maxWidth="100vw">
        <Toolbar disableGutters>
          <Typography
            component="div"
            sx={{ alignItems: 'left', display: { xs: 'flex', md: 'flex' } }}
          >
            <img className="icon" src={PactLogo} alt="logo" />
          </Typography>

          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap' }}>
            {pages.map((page) => (
              <Button
                key={page.url}
                onClick={handleCloseNavMenu}
                sx={{ mx: '2vw', display: 'flex', width: 'auto'}}
              >
                <Link to={page.url}><h2>{page.title}</h2></Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
            sx={{ alignItems: 'right', display: { xs: 'none', md: 'flex' } }}
          >
            <InstagramIcon />
            <FaceBookIcon />
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;