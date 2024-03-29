import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

    return (
        <section className='section' id="projects">
            <h2>projects</h2>
            <div className="projects-container">
                {enabledProjects.map((project, index) => (
                    <div key={project._id} className="projects-item">
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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
