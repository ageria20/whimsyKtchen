import { Container } from "react-bootstrap";
import whimsyImage from '../assets/Whimsy.png';
import React from 'react';

const Landing: React.FC = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${whimsyImage})`,
  };

  return (
    <div style={backgroundStyle} className="background-container"> 
      <div className="overlay"></div> 
      
      <Container className="overlay-container">
        <div className="typewriter">
          <h1 className="mb-5">We'll be back soon.</h1>
        </div>
        <h2>Contact us for any info</h2>
        <h3 className="mb-5">hello@whimsykitchen.com</h3>
      </Container>
    </div>
  );
}

export default Landing;
