import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

const Projects = ({ user }) => {
    const [expandedProjectId, setExpandedProjectId] = useState(null);
    const [selectedTechStack, setSelectedTechStack] = useState(null);

    const { projects } = user;
    const enabledProjects = projects.filter((project) => project.enabled).reverse();

    const fadeInAnimationVariants = (index) => {
        if (!selectedTechStack) {
            if (0.1 * index >= 0.5) {
                return {
                    initial: {
                        opacity: 0,
                        y: 50,
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.5,
                            duration: 1,
                        }
                    }
                }
            } else {
                return {
                    initial: {
                        opacity: 0,
                        y: 50,
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.1 * index,
                            duration: 1,
                        }
                    }
                }
            }
        } else {
            return null;
        }
    }

    const filterProjectsByTechStack = (techStack) => {
        setSelectedTechStack(techStack);
    }

    return (
        <>
            <section className="section" id="projects">
                <h2>projects</h2>
                <div className="project-title">
                    <h3 onClick={() => filterProjectsByTechStack(null)}>All</h3>
                    <h3 onClick={() => filterProjectsByTechStack("Reactjs")}>Reactjs</h3>
                    <h3 onClick={() => filterProjectsByTechStack("Nextjs")}>Nextjs</h3>
                    <h3 onClick={() => filterProjectsByTechStack("Mern")}>Mern</h3>
                </div>
                <div className="projects-container" >
                    {enabledProjects
                        .filter(project => selectedTechStack ? project.techStack.some(tech => tech.trim() === selectedTechStack) : true)
                        .map((project, index) => (
                            <motion.div
                                key={project._id}
                                className="projects-item"
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                                onMouseEnter={() => setExpandedProjectId(project._id)}
                                onMouseLeave={() => setExpandedProjectId(null)}
                            >
                                <img src={project.image.url} alt={project.name} />
                                <AnimatePresence>
                                    {expandedProjectId === project._id && (
                                        <motion.div
                                            className="projects-content"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p>{project.sequence}</p>
                                            <h3>{project.title}</h3>
                                            <span className="tech-stack">
                                                {project.techStack.map((tech) => (
                                                    <li key={tech} className="tech">
                                                        {tech}
                                                    </li>
                                                ))}
                                            </span>
                                            <div className="font-awesome">
                                                <span className="fa-icon">
                                                    <FontAwesomeIcon icon={["fab", "github"]} />
                                                </span>
                                                <span className="fa-icon">
                                                    <FontAwesomeIcon icon={["fas", "link"]} />
                                                </span>
                                            </div>
                                            {/* <article>{project.description}</article> */}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                </div>
            </section>
        </>
    );
};

export default Projects;
