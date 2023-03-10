import React, { useState } from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import logo from './logo.jpg';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import './NavBar.css';
const settings = ['Profile', 'Account', 'Products', 'Logout', 'Follow Me@LinkedIn'];

function NavBar() {
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [visible, setVisible] = useState(false);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
   
    <AppBar sx={{backgroundColor:"white"}} position="static" >
     
      <Container maxWidth="xl">
      <Toolbar disableGutters>
      <Typography>
        <IconButton href='http://www.orientpaperindia.com' sx={{ p: 0 }}>
            <img style={{marginRight:'25px'}} alt="Logo of OPM Amlai" src={logo} />
              </IconButton>
        </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              
             
            </Menu>
          </Box>
          {/* <IntegrationInstructionsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          
          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
                key="Products"
                onClick={handleCloseNavMenu}
                href="http://www.orientpaperindia.com/about-us"
                target="_blank"
                sx={{ my: 2, color: '#ed1c24', display: 'block' }}
              >
              About Us
              </Button>
              <Button
                href="http://www.orientpaperindia.com/products"
                target="_blank"
                key="Products"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#ed1c24', display: 'block' }}
              > Products
              </Button>
              <Button
                href="http://www.orientpaperindia.com/contact-us"
                target="_blank"
                key="Products"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#ed1c24', display: 'block' }}
              >
              Contact Us
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <SettingsApplicationsIcon sx={{color:'#ed1c24',display: { xs: 'none', md: 'flex' }, mr: 1,fontSize: 40 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
