import React, { useState } from "react";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ user }) => {
  const { skills } = user;
  const enabledSkills = skills.filter(skill => skill.enabled).reverse();
  const [showAllSkills, setShowAllSkills] = useState(false);

  const toggleShowAllSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

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
        {(showAllSkills ? enabledSkills : enabledSkills.slice(0, 9)).map((skill, index) => (
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
      <div onClick={toggleShowAllSkills} className="toggle">
        <span>
          <p>{showAllSkills ? 'show less' : 'show more'}</p>
          <FontAwesomeIcon icon={showAllSkills ? 'fa-angle-up' : 'fa-angle-down'} />
        </span>
      </div>
    </section>
  );
};

export default Skills;
