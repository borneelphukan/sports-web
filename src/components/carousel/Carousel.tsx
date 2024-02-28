import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "../cards/ProductCard";
import Button from "../buttons/Button";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  return (
    <div className="container mx-auto mb-20">
      <div className="text-xl font-semibold flex justify-between">
  <p className="text-lg font-bold mb-4 flex-shrink-0">Current highlight products at All4Golf</p>
  <div><Button bgColor="emerald-300" textColor={"black"} text={"See More"}/></div>
</div>

      
            <Slider {...settings}>
            <ProductCard imageUrl={"/products/product1.jpeg"} productName={"Golfschuhe für Damen Ecco Golf Tray"} price="20"/>
            <ProductCard imageUrl={"/products/product2.jpeg"} productName={"Golfschuhe für Damen Ecco Golf Tray"} price="20"/>
            <ProductCard imageUrl={"/products/product3.jpeg"} productName={"Golfschuhe für Damen Ecco Golf Tray"} price="20"/>
        </Slider>
        </div>
  );
};

export default Carousel;
