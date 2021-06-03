import React from 'react';
//images
import html from '../img/html-logo.jpg';
import css from '../img/css-logo.png';
import javascript from '../img/javascript-logo.png';
import bootstrap from '../img/bootstrap-logo.png';
import react1 from '../img/react-js.png';
import sass from '../img/sass-logo.png';
//
import Nav from './Nav';
//Framer Motion 
import {motion} from 'framer-motion';
//Animations
import {pageAnimation} from './animation';

const Skills = () => {
    return(
        <div>
        <Nav />
        <motion.div variants={pageAnimation} initial="hidden" animate="show" className="skill-container">
            <h2 className="skill-title">skills</h2>
            <div className="skill-cards">
            <div className="skill-card">
            <img src={html} alt="html-logo"/>
            <hr className="card-line"/>
                <h3>HTML</h3>
            </div>

            <div className="skill-card">
            <img src={css} alt="css-logo"/>
            <hr className="card-line"/>
                <h3>CSS</h3>
            </div>

            <div className="skill-card">
            <img src={javascript} alt="javascript-logo"/>
            <hr className="card-line"/>
                <h3>JavaScript</h3>
            </div>

            <div className="skill-card">
            <img src={bootstrap} alt="bootstrap-logo"/>
            <hr className="card-line"/>
                <h3>Bootstrap</h3>
            </div>

            <div className="skill-card">
            <img src={react1} alt="React-logo"/>
            <hr className="card-line"/>
                <h3>React Js</h3>
            </div>

            <div className="skill-card">
            <img src={sass} alt="Sass-logo"/>
            <hr className="card-line"/>
                <h3>Sass</h3>
            </div>
            </div>
        </motion.div>
        </div>
    )
};

export default Skills;