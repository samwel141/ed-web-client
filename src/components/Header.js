import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuId, setMenuId] = useState('');
  const menuRef = useRef(null);

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuId('');
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white', 
        borderBottom: '1px solid #e0e0e0', // Thin grayish border
        elevation: 0 
      }}
    >
      <Box sx={{ width: '80%', margin: '0 auto' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box component="img" src="https://d28hdetl1q8yl2.cloudfront.net/img/cv-logo.svg" alt="collegevine logo" sx={{ height: 40 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" sx={{ color: '#333' }}>Ivy</Button>
            <Button color="inherit" sx={{ color: '#333' }}>Chancing</Button>
            <Box
              onMouseEnter={(e) => handleMenuOpen(e, 'schools')}
              onMouseLeave={handleMenuClose}
              sx={{ display: 'flex', alignItems: 'center' }}
              ref={menuRef}
            >
              <Button
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
                sx={{ color: '#333' }}
              >
                Schools
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && menuId === 'schools'}
                onClose={handleMenuClose}
                onMouseLeave={() => {
                  if (!menuRef.current?.contains(document.activeElement)) {
                    handleMenuClose();
                  }
                }}
                keepMounted
              >
                <MenuItem onClick={handleMenuClose}>High Schools</MenuItem>
                <MenuItem onClick={handleMenuClose}>Colleges</MenuItem>
              </Menu>
            </Box>
            <Box
              onMouseEnter={(e) => handleMenuOpen(e, 'resources')}
              onMouseLeave={handleMenuClose}
              sx={{ display: 'flex', alignItems: 'center' }}
              ref={menuRef}
            >
              <Button
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
                sx={{ color: '#333' }}
              >
                Resources
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && menuId === 'resources'}
                onClose={handleMenuClose}
                onMouseLeave={() => {
                  if (!menuRef.current?.contains(document.activeElement)) {
                    handleMenuClose();
                  }
                }}
                keepMounted
              >
                <MenuItem onClick={handleMenuClose}>Resources</MenuItem>
                <MenuItem onClick={handleMenuClose}>Alumni</MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box>
            <Button color="inherit" sx={{ fontSize: 18, color: '#333' }}>Log in</Button>
            <Button
              color="inherit"
              variant="contained"
              sx={{ 
                borderColor: 'green', 
                color: 'white', 
                backgroundColor: 'green', 
                marginLeft: 3, 
                fontSize: 16,
                '&:hover': {
                  backgroundColor: '#333', // Blackish color on hover
                  color: 'white' // Ensure text is white on black background
                }
              }}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Header;
