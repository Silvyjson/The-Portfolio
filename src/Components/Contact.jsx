import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social_Handle from "./Others component/Social_handle";
import { motion } from 'framer-motion';

function Contact({ user }) {
    const { about, email } = user;

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 1,
            }
        }
    }

    return (
        <motion.section className="section contact-section" id="contact"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
        >
            <h2>Contact</h2>
            <div className="contact-container">
                <div className="contact-border">
                    <h1>Let's discuss on something <b>cool</b> together</h1>
                    <article>
                        <span>
                            <FontAwesomeIcon icon=" fa-location-dot" className="contact-font-icon" />
                            <p>{about.address}</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon="fa-phone" className="contact-font-icon" />
                            <p>{about.phoneNumber}</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon="fa-envelope" className="contact-font-icon" />
                            <p>{email}</p>
                        </span>
                    </article>
                    <Social_Handle user={user} />
                </div>
                <div className="form-section">
                    <blockquote className="quote">"{about.quote},,</blockquote>
                    <form className="contact_form">
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="Phone" required />
                        <textarea placeholder="Message" required />
                        <button><FontAwesomeIcon icon="fa-solid fa-paper-plane" /><i>Send</i></button>
                    </form>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;