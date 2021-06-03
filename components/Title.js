import React from 'react';
import Doodle from '../img/doodle.png';
//Components
import Nav from './Nav';
//Router
import {Link} from 'react-router-dom';
//Framer Motion 
import {motion} from 'framer-motion';
//Animations
import {pageAnimation} from './animation';

const Title = () => {
    return(
    <div className="container">
    <Nav />
    <motion.div variants={pageAnimation} initial="hidden" animate="show" className="cta">
    <div className="first-section">
        <h1>Creating <span>Websites</span> to Satisfy Your Needs</h1>
        <p className="title-p">Hi, I'm Carlos Figueroa A growing web developer 
        with a Front-end focus. I create and innovate websites, 
        My goal in this profession is to satisfy my clients 
        needs wheather it be for a business or personal.
        </p>
        <div className="button">
        <Link to="/contact" className="myButton">Contact Me</Link>
        </div>
        </div>
        <img src={Doodle} alt="doodle"/>
    </motion.div>
    </div>
    )
}

export default Title;