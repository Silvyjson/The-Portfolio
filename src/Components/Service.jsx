import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = ({ user }) => {

    const { services } = user;
    const enabledServices = services.filter(services => services.enabled);

    return (
        <section className="section" id='service'>
            <h2>services</h2>
            <div className='service-container'>
                {enabledServices.map((services) => (
                    <div key={services._id} className="services-item">
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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;