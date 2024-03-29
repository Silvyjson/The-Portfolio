import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = ({ user }) => {
  const { testimonials } = user;
  const enabledTestimonials = testimonials.filter(testimonial => testimonial.enabled);

  const initialSlidesToShow = 3;
  const initialScreenWidth = 1200;
  const slideReductionFactor = 0.2; 
  const breakpointIncrease = 40; 

  const responsiveSettings = Array.from({ length: 12 }).map((_, index) => {
    const breakpoint = initialScreenWidth - (index * 30 + index * breakpointIncrease);
    let slidesToShow = initialSlidesToShow - Math.floor(index * slideReductionFactor * 10) / 10;
    slidesToShow = slidesToShow < 1.2 ? 1.2 : slidesToShow;
    slidesToShow = breakpoint <= 500 ? 1.1 : slidesToShow;
    slidesToShow = breakpoint <= 480 ? 1 : slidesToShow;

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
    responsive: responsiveSettings 
  };
    // [
    //   {
    //     breakpoint: 1180,
    //     settings: {
    //       slidesToShow: 2.7,
    //     },
    //   },
    //   {
    //     breakpoint: 1110,
    //     settings: {
    //       slidesToShow: 2.3,
    //     },
    //   },
    //   {
    //     breakpoint: 950,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 820,
    //     settings: {
    //       slidesToShow: 1.7,
    //     },
    //   },
    //   {
    //     breakpoint: 710,
    //     settings: {
    //       slidesToShow: 1.5,
    //     },
    //   },
    //   {
    //     breakpoint: 650,
    //     settings: {
    //       slidesToShow: 1.3,
    //     },
    //   },
    //   {
    //     breakpoint: 520,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],


  return (
    <section className="testimonials-slide" id='testimonials'>
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {enabledTestimonials.map(testimonial => (
          <div key={testimonial._id} className="testimonial-item">
            <img src={testimonial.image.url} alt={testimonial.name} width={50} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
            <p>{testimonial.position}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
