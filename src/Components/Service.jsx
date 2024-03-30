import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';

const Service = ({ user }) => {

    const { services } = user;
    const enabledServices = services.filter(services => services.enabled);

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: (index) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1 * index,
                duration: 1,
            }
        })
    }

    return (
        <section className="section" id='service'>
            <h2>services</h2>
            <div className='service-container'>
                {enabledServices.map((services, index) => (
                    <motion.div key={services._id} className="services-item"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <article className='service-details'>
                            <h3 className='service-name'>{services.name}</h3>
                            <p>{services.desc}</p>
                        </article>
                        <img src={services.image.url} alt={services.name} />
                        <span className='service-price'>
                            <p>{services.charge}</p>
                            <span className='font-arrow-icon'>
                                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                            </span>
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Service;