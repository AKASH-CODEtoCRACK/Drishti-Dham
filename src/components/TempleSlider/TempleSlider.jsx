import React from 'react';
import Slider from 'react-slick';
import TempleCard from './TempleCard';
import { Jyotirlingas } from '../../data/temples';

// Slick Carousel settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TempleSlider = () => {
  return (
    <section className="py-16    ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">12 JYOTIRLINGAS</h1>
        <Slider {...sliderSettings}>
          {Jyotirlingas.map((temple, index) => (
            <TempleCard refId={index} key={index} temple={temple} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TempleSlider;
