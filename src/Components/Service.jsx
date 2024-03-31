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
                        <div className='service-img'>
                            <img src={services.image.url} alt={services.name} />
                        </div>
                        <div className='service-details'>
                            <article className='service-name'>
                                <h3>{services.name}</h3>
                                <p>{services.desc}</p>
                            </article>
                            <span className='service-price'>
                                <h3>{services.charge}</h3>
                                <span className='font-arrow-icon'>
                                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                                </span>
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Service;