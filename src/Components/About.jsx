import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About({ user }) {
  const { about } = user;
  const [highlightText, setHighlightText] = useState(about.exp_year + ' ' + ' Years of Experience');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlightText(about.some_total + ' ' + 'Completed Projects');
      setTimeout(() => {
        setHighlightText(about.exp_year + ' ' + ' Years of Experience');
      }, 5000);
    }, 5000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="home-section" id='home'>
      <div className="user-info">
        <h3>{about.title}</h3>
        <h2>{about.name}</h2>
        <i>"{about.subTitle}"</i>
        <p>{about.description}</p>
        <div>Download CV <FontAwesomeIcon icon="fa-solid fa-download" className='download' /></div>
      </div>
      <div className="avatar">
        <img src={about.avatar.url} alt={about.name} />
        <div className='highlight'><p>{highlightText}</p></div>
      </div>
    </div>
  );
}

export default About;
