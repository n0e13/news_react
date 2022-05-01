import React, { Component } from "react";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import NewspaperIcon from '@mui/icons-material/Newspaper';


class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <Link to='/home' className="nav__element"><HomeIcon /></Link>
        <br />
        <Link to='/form' className="nav__element"><AddIcon /> </Link>
        <br />
        <Link to='/list' className="nav__element"><NewspaperIcon /></Link>
      </nav>
    );
  }
}

export default Nav;
