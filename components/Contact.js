import React from 'react';
import emailjs from 'emailjs-com';
import Nav from './Nav';
//Framer Motion 
import {motion} from 'framer-motion';
//Animations
import {pageAnimation} from './animation';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_25m46wq', 'template_kpty1cb', e.target, 'user_xcMycvOcng1uQIqiH4Knn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return(
        <div>
        <Nav />
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
        <h2 className="skill-title">Get In Touch</h2>
        <form className="form" onSubmit={sendEmail}>
    
            <label>Name:</label>
            <input placeholder="Enter Name" type="text" name="name"
            />

            <label>Email:</label>
            <input placeholder="Enter Email" type="email" name="email"
            />

            <label>Subject:</label>
            <input placeholder="Enter Subject" type="text" name="subject"
            />

            <label>Message:</label>
            <textarea placeholder="Enter Message" cols="30" rows="8" name="message"
            ></textarea>

            <button type="submit" className="form-btn">Submit</button>
        </form>
        </motion.div>
        </div>
    )
}

export default Contact;