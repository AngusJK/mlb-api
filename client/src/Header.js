import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2017/04/MLB-Logo.png" alt=""></img>
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <IconButton>
        <ForumIcon fontSize="large" className="forum__icon" /> 
      </IconButton>
    </div>
  )
}

export default Header
