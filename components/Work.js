import React from 'react';
import Nav from './Nav';
//images
import doodle from '../img/gymdoodle.png';
import peeps from '../img/peeps.png';
import mustang from '../img/mustangclassic.jpg';
//Framer Motion 
import {motion} from 'framer-motion';
//Animations
import {pageAnimation} from './animation';

const Work = () => {
    return(
        <div>
        <Nav />
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <h1 className="skill-title">My Work</h1>
            <div className="work-container">
                <div className="work-cards">
                    <div className="work-card">
                        <div className="image-container">
                        <img src={doodle} alt="human"/>
                        </div>
                        <hr/>
                        <h3>Gym Website</h3>
                        <hr/>
                        <p>A website to satisfy your fitness needs. This website is built using React and Sass</p>
                        <a href="https://github.com/Carlos7-dotcom/Gym-website">Github</a>
                        <a href="https://nifty-bhaskara-42c582.netlify.app/" target="_blank" rel="noreferrer">Website</a>
                    </div>

                    <div className="work-card">
                        <div className="image-container">
                        <img src={peeps} alt=""/>
                        </div>
                        <hr/>
                        <h3>E-commerce</h3>
                        <hr/>
                        <p>A website where you can shop for the latrst trends in T-shirts. This website is built using HTML, CSS, Bootstrap</p>
                        <a href="https://github.com/Carlos7-dotcom/E-commerce">Github</a>
                        <a href="https://nifty-agnesi-a8c732.netlify.app">Website</a>
                    </div>

                    <div className="work-card">
                        <div className="image-container">
                        <img src={mustang} alt=""/>
                        </div>
                        <hr/>
                        <h3>Cars Gallery</h3>
                        <hr/>
                        <p>A website to browse to different cars. This website is built using HTML, CSS, JavaScript</p>
                        <a href="https://github.com/Carlos7-dotcom/Cars-Gallery/tree/main">Github</a>
                        <a href="https://elated-poincare-fcbbf7.netlify.app/">Website</a>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default Work;