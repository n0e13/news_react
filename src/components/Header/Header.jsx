import React, { Component } from "react";
import { userContext } from '../../context/userContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Nav from './Nav';
import logo from '../../assets/img/warning.png';

class Header extends Component {
  render() {
    return (
      <header className='header'>
         <img src={logo} alt="logo" /> 
        <Nav />
        <div className='user'>
          <userContext.Consumer>
            {({ user, avatar, logout }) =>
              user ?
                <>
                  <p>Hola, {user}</p>
                  <Avatar alt={user} src={avatar} />
                  <Button variant="contained" size="small" onClick={logout}>Logout</Button>
                 {/*  <img src={avatar} alt='avatar' /> 
                  <button onClick={logout}>Logout</button> */}
                </> : ""
            }
          </userContext.Consumer>
        </div >
      </header >
    );
  }
}

export default Header;
