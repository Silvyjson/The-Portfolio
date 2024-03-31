import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import starRate from '../assets/image/star-icon.png';
import quoteIcon from '../assets/image/quote-icon.png';
import profileGirl1 from '../assets/image/profile-girl-1.jpg';
import profileBoy1 from '../assets/image/profile-boy-1.jpg';
import profileGirl2 from '../assets/image/profile-girl-2.webp';
import profileBoy2 from '../assets/image/profile-boy-2.jpg';
import profileGirl3 from '../assets/image/profile-girl-3.jpg';

const Testimonials = ({ user }) => {
  const { testimonials } = user;
  const enabledTestimonials = testimonials.filter(testimonial => testimonial.enabled);
  const profileImg = [profileGirl1, profileBoy1, profileGirl2, profileBoy2, profileGirl3]

  const initialSlidesToShow = 3;
  const initialScreenWidth = 1200;
  const slideReductionFactor = 0.2;
  const breakpointIncrease = 40;

  const responsiveSettings = Array.from({ length: 12 }).map((_, index) => {
    const breakpoint = initialScreenWidth - (index * 30 + index * breakpointIncrease);
    let slidesToShow = initialSlidesToShow - Math.floor(index * slideReductionFactor * 10) / 10;
    slidesToShow = slidesToShow < 1.2 ? 1.2 : slidesToShow;
    slidesToShow = breakpoint <= 500 ? 1 : slidesToShow;

    return {
      breakpoint: breakpoint,
      settings: {
        slidesToShow: slidesToShow
      }
    };
  });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: initialSlidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    responsive: responsiveSettings
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 2,
      }
    }
  }

  return (
    <motion.section className="testimonials-slide" id='testimonials'
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {enabledTestimonials.map((testimonial, index) => (
          <div key={testimonial._id} className="testimonial-item">
            <div>
              <img src={quoteIcon} alt="quote" className='quotes-icon' />
              <span className='testimonial-profile'>
                <img src={profileImg[index % profileImg.length]} alt="profile img" />
                <hgroup>
                  <h3>{testimonial.name}</h3>
                  <h5>{testimonial.position}</h5>
                </hgroup>
              </span>
              <p>{testimonial.review}</p>
              <img src={starRate} alt="star" width={100} />
              <img src={testimonial.image.url} alt={testimonial.name} width={30} className='p-logo' />
            </div>
          </div>
        ))}
      </Slider>
    </motion.section>
  );
};

export default Testimonials;
