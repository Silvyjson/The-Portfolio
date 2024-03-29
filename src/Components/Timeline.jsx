import React, { useState } from 'react';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
};

const ExperienceTimeline = ({ experienceTimeline }) => (
  <div>
    {experienceTimeline.length > 0 ? (
      experienceTimeline.map((item) => (
        <div key={item._id} className="timeline-item">
          {/* <em>{item.sequence}</em> */}
          <div className='timelime-info'>
            <p>{formatDate(item.startDate)} - {formatDate(item.endDate)}</p>
            <p>{item.company_name}</p>
            <p>{item.jobLocation}</p>
          </div>
          <div className='border'><div /></div>
          <div className='timeline-details'>
            <h4>{item.jobTitle}</h4>
            <ul>
              {item.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <summary>{item.summary}</summary>
          </div>
        </div>
      ))
    ) : (
      <p>No experience to display.</p>
    )}
  </div>
);

const EducationTimeline = ({ educationTimeline }) => (
  <div>
    {educationTimeline.length > 0 ? (
      educationTimeline.map((item) => (
        <div key={item._id} className="timeline-item">
          {/* <em>{item.sequence}</em> */}
          <div className='timelime-info'>
            <p>{formatDate(item.startDate)} - {formatDate(item.endDate)}</p>
            <p>{item.company_name}</p>
            <p>{item.jobLocation}</p>
          </div>
          <div className='border'><div /></div>
          <div className='timeline-details'>
            <h4>{item.jobTitle}</h4>
            <ul>
              {item.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <summary>{item.summary}</summary>
          </div>
        </div>
      ))
    ) : (
      <p>No education to display.</p>
    )}
  </div>
);

const Timeline = ({ user }) => {
  const { timeline } = user;

  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);

  const educationTimeline = timeline.filter(item => item.forEducation && item.enabled).reverse();
  const experienceTimeline = timeline.filter(item => !item.forEducation && item.enabled).reverse();

  const handleGetExperience = () => {
    setShowExperience(true);
    setShowEducation(false);
  };

  const handleGetEducation = () => {
    setShowExperience(false);
    setShowEducation(true);
  };

  return (
    <section className="section" id='timeline'>
      <div className='min-550'>
        <div className='timeline-title'>
          <h3 onClick={handleGetExperience}>Experience</h3>
          <h3 onClick={handleGetEducation}>Education</h3>
        </div>
        {showExperience && <ExperienceTimeline experienceTimeline={experienceTimeline} />}
        {showEducation && <EducationTimeline educationTimeline={educationTimeline} />}
      </div>
      <div className='max-550'>
        <span>
          <h2> Experience</h2>
          <ExperienceTimeline experienceTimeline={experienceTimeline} />
        </span>
        <span>
          <h2>Education</h2>
          <EducationTimeline educationTimeline={educationTimeline} />
        </span>
      </div>
    </section>
  );
};

export default Timeline;
