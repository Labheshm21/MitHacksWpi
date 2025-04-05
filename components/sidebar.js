// components/Sidebar.js
import React, { useState, useRef } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const menuItems = [
  { label: 'Campaign', path: '/campaign' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Governance', path: '/governance' },
  { label: 'Invest', path: '/invest' },
  { label: 'Register', path: '/register' },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  // Handle hover enter: cancel any close timeout
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  // Handle hover leave: close after a short delay to prevent flicker
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <Box sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1300 }}>
      {/* Hamburger Icon (No tooltip) */}
      <IconButton
        onMouseEnter={handleMouseEnter}
        sx={{
          backgroundColor: '#1976d2',
          color: '#fff',
          p: 1,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer opens on hover and closes smoothly */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        variant="temporary"
        PaperProps={{
          sx: {
            width: 220,
            background: 'linear-gradient(135deg, #2196f3, #66bb6a)',
            color: '#fff',
            pt: 3,
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
            fontFamily: '"Abadi", Tahoma, Geneva, sans-serif',
          },
        }}
        ModalProps={{ keepMounted: true }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Static Menu Heading */}
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 'bold',
            fontSize: '1.2rem',
            color: '#ffffff',
            fontFamily: '"Abadi", Tahoma, Geneva, sans-serif',
          }}
        >
          Menu
        </Typography>

        {/* Navigation Links */}
        <List>
          {menuItems.map((item) => (
            <Link href={item.path} key={item.label} passHref legacyBehavior>
              <ListItem
                button
                component="a"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '1rem',
                    fontFamily: '"Abadi", Tahoma, Geneva, sans-serif',
                    color: '#ffffff',
                  }}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
