import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

const PopupCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  return (
    <div className="container mx-auto mb-5">
            <Slider {...settings}>
            <Image
              src={"/travels/travel1.jpeg"}
              alt="Blog Image"
              width={450}
              height={450}
              className="rounded-t-md hover:scale-125 transition-all duration-500 w-full h-full object-cover"
            />
            <Image
              src={"/travels/travel2.jpeg"}
              alt="Blog Image"
              width={450}
              height={450}
              className="rounded-t-md hover:scale-125 transition-all duration-500 w-full h-full object-cover"
            />
        </Slider>
        </div>
  );
};

export default PopupCarousel;
