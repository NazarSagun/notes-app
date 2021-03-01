import React from 'react';
//import Link from Router
import { Link } from 'react-router-dom';
//import GoogleAuth component
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Notes
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Notes
        </Link>
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header;