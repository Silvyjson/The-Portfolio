import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';


function About({ user }) {
  const { about } = user;
  const [highlightText, setHighlightText] = useState(about.exp_year + ' ' + ' Years of Experience');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlightText(about.some_total + ' ' + 'Completed Projects');
      setTimeout(() => {
        setHighlightText(about.exp_year + ' ' + ' Years of Experience');
      }, 5000);
    }, 5000);

    return () => clearInterval(intervalId);
  });

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 2
      }
    }
  }

  return (
    <motion.div className="home-section" id='home'
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <motion.div className="user-info" variants={fadeInAnimationVariants}>
        <motion.h3 variants={fadeInAnimationVariants}>{about.title}</motion.h3>
        <motion.h2 variants={fadeInAnimationVariants}>{about.name}</motion.h2>
        <motion.i variants={fadeInAnimationVariants}>"{about.subTitle}"</motion.i>
        <motion.p variants={fadeInAnimationVariants}>{about.description}</motion.p>
        <motion.div variants={fadeInAnimationVariants}>Download CV <FontAwesomeIcon icon="fa-solid fa-download" className='download' /></motion.div>
      </motion.div>
      <motion.div className="avatar" variants={fadeInAnimationVariants}>
        <img src={about.avatar.url} alt={about.name} />
        <motion.div className='highlight'><p>{highlightText}</p></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
