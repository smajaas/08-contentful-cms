import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>contentful CMS</h1>
          <p>
            YOLO pok pok actually, poke narwhal raclette fashion axe. Austin
            microdosing sus, thundercats bitters blog kickstarter letterpress
            kinfolk umami pabst direct trade. Sartorial pop-up grailed twee,
            freegan waistcoat synth. Cronut la croix selvage green juice jawn
            gorpcore
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
