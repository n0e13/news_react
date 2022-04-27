import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to='/home'>Home</Link>
        <br />
        <Link to='/form'>Añade </Link>
        <br />
        <Link to='/list'>Noticias</Link>
      </nav>
    );
  }
}

export default Nav;
