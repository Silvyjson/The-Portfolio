import React, { useRef } from "react";

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

  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div className='skills-content'>
        {enabledSkills.map((skill, index) => (
          <div key={skill._id} className="skills-item">
            <img src={skill.image.url} alt={skill.name} width={50}
              className="skill-icon"
              onMouseOver={() => handleMouseOverIcon(index)}
              onMouseOut={() => handleMouseOutIcon(index)}
            />
            <span className="skill-set"
              ref={(el) => (overlayContentRefs.current[index] = el)}
              style={{
                display: index === 0 ? 'block' : '',
              }}
            >
              <i>
                <p htmlFor={skill.name}>{skill.name}</p>
                <p htmlFor={skill.name}>{skill.percentage}%</p>
              </i>
              <meter value={skill.percentage} min="0" max="100"></meter>
            </span>
            {/* <p>{skill.sequence}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
