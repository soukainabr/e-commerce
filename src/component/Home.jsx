import React from 'react';
import { Parallax } from 'react-parallax';
import './Home.css';
import Products from './Products';

const Home = () => {
  return (
    <div className="hero">
      <Parallax
        className="parallax-image"
        blur={3}
        bgImage="/assets/est.jpg"
        bgImageAlt="Background"
        strength={200}
      >
        
        <div className="parallax-content">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </Parallax>

      <div className="other-content">
        <Products/>
      </div>
    </div>
  );
};

export default Home;
