import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import "./Header.css"
const Header = () => {
    return (
        <>
        <div className="navbar bg-slate-500  text-white">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Quiz-Tracker</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-semibold">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/Statistics">Statistics</Link> </li>
            <li><Link to="/blog">Blog</Link> </li>
            <li><Link to="/about">About</Link> </li>
          </ul>
        </div>
      </div>
      
      </>
    );
};

export default Header;