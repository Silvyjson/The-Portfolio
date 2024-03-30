import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';

const Projects = ({ user }) => {
    const overlayContentRefs = useRef([]);

    const { projects } = user;
    const enabledProjects = projects.filter(project => project.enabled).reverse();

    const handleMouseOver = (index) => {
        overlayContentRefs.current[index].style.opacity = 1;
    };

    const handleMouseOut = (index) => {
        overlayContentRefs.current[index].style.opacity = 0;
    };

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: (index) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: index * 0.1 <= 0.8 ? 0.1 * index : 0.5,
                duration: .5,
            }
        })
    }

    return (
        <section className='section' id="projects">
            <h2>projects</h2>
            <div className="projects-container">
                {enabledProjects.map((project, index) => (
                    <motion.div key={project._id} className="projects-item"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <img src={project.image.url} alt={project.name} />
                        <div
                            className="projects-content"
                            ref={(el) => (overlayContentRefs.current[index] = el)}
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseOut={() => handleMouseOut(index)}
                        >

                            <p>{project.sequence}</p>
                            <h3>{project.title}</h3>
                            <span className="tech-stack">
                                {project.techStack.map((tech) => (
                                    <li key={tech} className="tech">{tech}</li>
                                ))}
                            </span>
                            <div className="font-awesome">
                                <span className="fa-icon">
                                    <FontAwesomeIcon icon={["fab", "github"]} />
                                </span>
                                <span className="fa-icon">
                                    <FontAwesomeIcon icon="fa-solid fa-link" />
                                </span>
                            </div>
                            {/* <p>{project.description}</p> */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
