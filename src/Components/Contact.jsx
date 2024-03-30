import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social_Handle from "./Others component/Social_handle";

function Contact({ user }) {
    const { about, email } = user;

    return (
        <section className="section" id="contact">
            <h2>Get in touch</h2>
            <div className="contact-container">
                <div className="contact-border">
                    <article>
                        <span className="font-icons icon-1">
                            <FontAwesomeIcon icon=" fa-location-dot" />
                        </span>
                        <h3>Location</h3>
                        <p>{about.address}</p>
                    </article>
                    <article>
                        <span className="font-icons icon-2">
                            <FontAwesomeIcon icon="fa-phone" />
                        </span>
                        <h3> Phone</h3>
                        <p>{about.phoneNumber}</p>
                    </article>
                    <article>
                        <span className="font-icons icon-3">
                            <FontAwesomeIcon icon="fa-envelope" />
                        </span>
                        <h3>Mail</h3>
                        <p>{email}</p>
                    </article>
                </div>
                <form className="contact_form">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Phone" required />
                    <textarea placeholder="Message" required />
                    <button>SEND</button>
                </form>
            </div>
            <div className="quote">
                <h2>Quote""</h2>
                <blockquote>{about.quote}</blockquote>
            </div>
            <Social_Handle user={user} />
        </section>
    );
}

export default Contact;