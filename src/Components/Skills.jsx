import React, { useRef } from "react";
import { motion } from 'framer-motion';

const Skills = ({ user }) => {
  const overlayContentRefs = useRef([]);

  const { skills } = user;
  const enabledSkills = skills.filter(skill => skill.enabled).reverse();


  const handleMouseOverIcon = (index) => {
    overlayContentRefs.current[index].style.display = "block";
  };

  const handleMouseOutIcon = (index) => {
    overlayContentRefs.current[index].style.display = "none";
    if (window.innerWidth <= 1200) {
      overlayContentRefs.current[0].style.display = 'block';
    }
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      X: 100,
    },
    animate: (index) =>({
      opacity: 1,
      X: 0,
      transition : {
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
      transition : {
        duration: 0.01
      }
    }
  }

  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div className='skills-content'>
        {enabledSkills.map((skill, index) => (
          <div key={skill._id} className="skills-item">
            <motion.img src={skill.image.url} alt={skill.name} width={50}
              className="skill-icon"
              onMouseOver={() => handleMouseOverIcon(index)}
              onMouseOut={() => handleMouseOutIcon(index)}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            />
            <motion.span className="skill-set"
              ref={(el) => (overlayContentRefs.current[index] = el)}
              style={{
                display: index === 0 ? 'block' : '',
              }}
              variants={fadeInAnimationVariantspan}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <i>
                <p htmlFor={skill.name}>{skill.name}</p>
                <p htmlFor={skill.name}>{skill.percentage}%</p>
              </i>
              <meter value={skill.percentage} min="0" max="100"></meter>
            </motion.span>
            {/* <p>{skill.sequence}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
