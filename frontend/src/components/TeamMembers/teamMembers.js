import React from 'react';
import './TeamMembers.css';

const teamMembers = [
  { name: 'JOHNATHAN DOE', title: 'CHIEF EXECUTIVE OFFICER', imgSrc: '/images/creatives/team-member1.png' },
  { name: 'JOHNATHAN DOE', title: 'CHIEF EXECUTIVE OFFICER', imgSrc: '/images/creatives/team-member2.png' },
  { name: 'JOHNATHAN DOE', title: 'CHIEF EXECUTIVE OFFICER', imgSrc: '/images/creatives/team-member3.png' },
  { name: 'JOHNATHAN DOE', title: 'CHIEF EXECUTIVE OFFICER', imgSrc: '/images/creatives/team-member1.png' },

];

const TeamMembers = () => {
  return (
    <div className='maindiv'>
      <div className="container text-center team-container">
        <h2 className="secondary-h1">OUR TEAM</h2>
        <h3 className="head-h1">Meet Our Team</h3>
        <p className='body_paragraph'>Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur Convallis vivamus at cras porta nibh velit aliquam eget in t</p>
        <div className="row align-items-center team-member-list">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-3" key={index}>
              <div className="card h-100 border-0">
                <img src={member.imgSrc} className="card-img-top" alt={member.name} />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
