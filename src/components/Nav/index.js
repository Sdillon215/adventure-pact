import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
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
  { url: '/', title: 'HOME' },
  { url: 'pricing', title: 'PRICING + PACKAGES' },
  { url: 'rightforyou', title: 'WHAT TYPE OF WEDDING IS RIGHT FOR ME?' },
  { url: 'blog', title: 'BLOG & RESOURCES' },
  { url: 'about', title: 'ABOUT & FAQ' },
  { url: 'contact', title: 'CONTACT' },
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
    <AppBar position="static" color="appBar" sx={{boxShadow: 0 }}>
      <Container maxWidth="100vw">
        <Toolbar disableGutters>
          <Typography
            component="div"
            sx={{ alignItems: 'left', display: { xs: 'flex', md: 'flex' } }}
          >
            <img className="icon" src={PactLogo} alt="logo" />
          </Typography>

          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.url}
                onClick={handleCloseNavMenu}
                sx={{ my: 'auto', mx: 'auto', color: 'white', display: 'block' }}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;