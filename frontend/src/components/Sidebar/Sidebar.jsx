import './Sidebar.css';
import { assets } from '../../assets/assets';
import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ selectedMenu, setSidebarOpen }) => {
  const menuItems = [
    { text: 'Home', path: '/' },    
    { text: 'My Page', path: '/' },
    { text: 'Bookmarks', path: '/' },
    { text: 'Settings', path: '/' },
    { text: 'Dark Mode', path: '/' },
    // Add more menu items as needed
  ];

  return (
    <Box>

       <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={() => setSidebarOpen(false)}>
            
              <ListItemText className='menu-list' primary={item.text} />
            
          </ListItem>
        ))}
       </List>

    </Box>
  );
};

export default Sidebar;
