import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="mt-4">
      <h2 className="text-white p-3">Skills</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="skill">
            <h3>Front-End Development</h3>
            <ul>
              <li>Proficient in HTML5, CSS3, and JavaScript</li>
              <li>Strong knowledge of responsive web design and cross-browser compatibility</li>
              <li>Experience with Bootstrap for building responsive web interfaces</li>
              <li>Familiarity with modern front-end libraries and frameworks</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="skill">
            <h3>Back-End Development</h3>
            <ul>
              <li>Proficient in Node.js and Express.js for server-side development</li>
              <li>Understanding of RESTful API design and implementation</li>
              <li>Advanced knowledge of database design and management using MySQL</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="skill">
            <h3>Developmental Tools</h3>
            <ul>
              <li>Visual Studio Code</li>
              <li>Git and Github</li>
              <li>npm</li>
              <li>Python (Basic)</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;