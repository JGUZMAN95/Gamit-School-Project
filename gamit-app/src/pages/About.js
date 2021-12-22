import React from 'react';
import TEAM from './2003650.jpg'


const About = () => {
  
  return (
    <div style={{
      height: '100%',
      backgroundColor: '#5771a3',
      color: 'white',
      textAlign: 'center'

    }}
    >
      <h1 style={{
        padding: '40px 0px 0px 0px',
        color: 'white',
        textAlign: 'center'
      }}>About Gamit</h1> <br />
  <img src = {TEAM} alt = "team" height = {400} width = {400} /> <br /> <br /> <br />

      <p>We believe in having a good time while doing what we love and we do love what we do.</p> <br /> 
      <p> Our Team members are Benjamin, Janvi, Pramod, Jocelyn, and Timothy.</p> <br />
      <h2>Say Hi to Our Team</h2><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

      <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Gamit | All rights reserved
          </p>
        </div>
      
    </div>
  );
};

export default About;