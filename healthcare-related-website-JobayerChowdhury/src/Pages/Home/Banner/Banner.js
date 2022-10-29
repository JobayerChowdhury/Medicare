import React from 'react';
import { Carousel } from 'react-bootstrap';


import './Banner.css'

const Banner = () => {
    return (
        <div>
                 <Carousel className="background-image">
  <Carousel.Item>
    <img height="50%"
      className=""
      src="http://sjmedicare.jwsuperthemes.com/wp-content/uploads/revslider/slide11/2.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="banner-text">Do You Need Proper Treatment</h3>
      <p className="banner-text">We have certified Expert doctors</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="50%"
      className=""
      src="http://sjmedicare.jwsuperthemes.com/wp-content/uploads/revslider/slide11/slide-person1.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="banner-text">What kind of disease are you facing from?</h3>
      <p className="banner-text">You can talk with our Experts and get your solution.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=""
      src="http://sjmedicare.jwsuperthemes.com/wp-content/uploads/revslider/slide11/3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="banner-text">Are you Not feeling well?</h3>
      <p className="banner-text">Talk with our experts</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           
        </div>
    );
};

export default Banner;