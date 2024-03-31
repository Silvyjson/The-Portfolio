import React, { useRef } from "react";
import { motion } from 'framer-motion';

const Skills = ({ user }) => {
  const overlayContentRefs = useRef([]);

  const { skills } = user;
  const enabledSkills = skills.filter(skill => skill.enabled).reverse();

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index) => {
      if (0.1 * index >= 0.5) {
        return {
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 1,
          }
        }
      } else {
        return {
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.1 * index,
            duration: 1,
          }
        }
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
