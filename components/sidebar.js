// components/Sidebar.js
import React, { useState } from 'react';
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

  return (
    <Box sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1300 }}>
      {/* Removed Tooltip wrapper */}
      <IconButton
        onMouseEnter={() => setOpen(true)}
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
        onMouseLeave={() => setOpen(false)}
      >
        {/* ✅ Only this "Menu" heading remains */}
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
