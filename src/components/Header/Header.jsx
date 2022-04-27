import React, { Component } from "react";
import { userContext } from '../../context/userContext';
import Nav from './Nav';
import logo from '../../assets/img/warning.png';

class Header extends Component {
  render() {
    return (
      <header>
         <img src={logo} alt="logo" /> 
        <Nav />
        <div>
          <userContext.Consumer>
            {({ user, avatar, logout }) =>
              user ?
                <>
                  <p>Hola, {user}</p>
                  <img src={avatar} alt='avatar' />
                  <button onClick={logout}>Logout</button>
                </> : ""
            }
          </userContext.Consumer>
        </div >
      </header >
    );
  }
}

export default Header;
