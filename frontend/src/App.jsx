import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homee from './pages/Home/Homee';
import Postt from './pages/Postt/Postt';
import AddPost from './pages/AddPost/AddPost';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  
  return (
    <Box>
      <Navbar selectedMenu={selectedMenu}  />

      <Box sx={{ display: 'flex' }}>
        {sidebarOpen && (
          <Box
            sx={{
              width: '220px',
              position: 'fixed',
              top: '64px',
              left: 0,
              height: 'calc(100vh - 64px)',
              zIndex: 1200,
              backgroundColor: 'white',
              boxShadow: 1,
            }}
          >
            <Sidebar selectedMenu={selectedMenu}  />
          </Box>
        )}

        <Box sx={{ marginLeft: sidebarOpen ? '200px' : 0, flex: 1, marginTop: '30px' }}>
          <Routes>
            <Route path="/" element={<Homee />} />
            <Route path="/article/:id" element={<Postt />} />
            <Route path="/add-article" element={<AddPost />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
