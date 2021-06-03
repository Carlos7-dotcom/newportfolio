import React from 'react';
//Router 
import {Link} from 'react-router-dom';
import '../styles/_nav.scss'

const Nav = () => {
    return(
        <div>
        <div className="title-container">
      <h2 id="nav-title"><Link to="/">Portfolio</Link></h2> 
      <ul className="navigation">
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/skills">My Skills</Link></li>
        <li><Link to="/work">My Work</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
        </div>
        </div>
    )
}

export default Nav;

