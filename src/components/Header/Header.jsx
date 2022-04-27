import React, { Component } from "react";
import { userContext } from '../../context/userContext';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <header>
        {/* <img src={logo} alt="logo" /> */}
        <Nav />
        <div className='user'>
          <userContext.Consumer>
            {({ user, logout }) =>
              user ?
                <>  
                  <p>Hola, {user}</p>
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
