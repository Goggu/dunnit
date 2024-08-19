import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'

const Navbar = ({selectedMenu, toggleSidebar}) => {

  return (
    <div className="navbar">
      
      <div className='navbar-left'>        
        <IconButton onClick={toggleSidebar}>
          <img src={assets.sidebar_icon} className='sidebar-icon' alt='' />
        </IconButton>
        <Link to="/" className='app-logo'>
          <h2>DunnIt</h2>
        </Link>
      </div>

      <div className='navbar-center'>
        <input type="text" class="search-input" placeholder="Search here" />
      </div>

      <div className="navbar-right">        
        <Link to="/add-article">  
          <div className='navbar-right-add-items'>
            <img src={assets.Add_Post_Icon} alt="Add New Article" className="add-article-icon" />
            <h2>write</h2>
          </div>
        </Link>
        <IconButton>
          <img src={assets.message_icon} className='message-icon' alt='' />
        </IconButton>
        <IconButton>
          <img src={assets.notification_icon} className='notification-icon' alt='' />
        </IconButton>        
      </div>

    </div> 
  )
}

export default Navbar
