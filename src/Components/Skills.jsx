import React, { useRef } from "react";
import { motion } from 'framer-motion';

const Skills = ({ user }) => {
  const overlayContentRefs = useRef([]);

  const { skills } = user;
  const enabledSkills = skills.filter(skill => skill.enabled).reverse();

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      X: 100,
    },
    animate: (index) => ({
      opacity: 1,
      X: 0,
      transition: {
        delay: 0.1 * index,
        duration: 1
      }
    })
  }

  const fadeInAnimationVariantspan = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.01
      }
    }
  }

  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div className='skills-content'>
        {enabledSkills.map((skill, index) => (
          <motion.div key={skill._id} className="skills-item"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <span className="skill-icon">
              <img src={skill.image.url} alt={skill.name} width={40} />
              <meter value={skill.percentage} min="0" max="100"></meter>
            </span>
            <i>
              <p htmlFor={skill.name}>{skill.name}</p>
              <p htmlFor={skill.name}>{skill.percentage}%</p>
            </i>
            {/* <p>{skill.sequence}</p> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
