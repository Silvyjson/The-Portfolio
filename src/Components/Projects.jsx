import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

const Projects = ({ user }) => {
    const [expandedProjectId, setExpandedProjectId] = useState(null);

    const { projects } = user;
    const enabledProjects = projects.filter((project) => project.enabled).reverse();

    return (
        <>
            <section className="section" id="projects">
                <h2>projects</h2>
                <div className="projects-container">
                    {enabledProjects.map((project) => (
                        <motion.div
                            key={project._id}
                            className="projects-item"
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