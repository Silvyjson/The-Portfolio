import React from 'react'
import Menubar from './Others component/MenuBar';
import logo from '../assets/image/logofull.png'

const NavSection = ({ user }) => {
    const { about } = user;

    const menuOption = ["Home", "Services", "Skills", "Projects", "Timeline", "Testimonials"];
    const id = ["#home", "#service", "#skills", "#projects", "#timeline", "#testimonials"]

    const handleGetID = (index) => {
        const targetId = id[index];
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id ${targetId} not found.`);
        }
    }    

    const getContact = () => {
        const getId = document.querySelector('#contact');
        getId.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className='nav_section'>
            <div className="avatar-logo">
                <img src={logo} alt="logo" />
            </div>
            <Menubar />
            <menu className='menuOption'>
                <ul>
                    {menuOption.map((item, index) => (
                        <li key={index} onClick={() => handleGetID(index)}>{item}</li>
                    ))}
                </ul>

                <p onClick={getContact}>Contact</p>
            </menu>
        </nav>
    )
}

export default NavSection