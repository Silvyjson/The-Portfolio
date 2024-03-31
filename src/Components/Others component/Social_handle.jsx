import React from 'react'

const Social_Handle = ({ user }) => {
    const { social_handles } = user;
    const enabledSocial_handles = social_handles.filter(social_handles => social_handles.enabled);

    return (
        <div className='social_handle-container'>
            {enabledSocial_handles.map((social_handles) => (
                <div key={social_handles._id} className="social_handles-item">
                    {/* <h3>{social_handles.platform}</h3> */}
                    <a href={social_handles.url} target="_blank" rel="noopener noreferrer">
                        <img src={social_handles.image.url} alt={social_handles.name} className='social-icon' />
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Social_Handle; 