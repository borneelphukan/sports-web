import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdCard from "@/components/cards/AdCard";

const CategoriesTab: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="py-1 px-2 text-center my-5">
      <h2 className="text-lg font-bold">Recommended Trips</h2>
      <Slider {...settings}>
        <div>
          <AdCard imageUrl={"/travels/travel1.jpeg"} author={""} title={"Brilliant Golf Resort in Thracian Cliffs"} description={"From 1050$ P.P"}/>
        </div>
        <div>
          <AdCard imageUrl={"/travels/travel1.jpeg"} author={""} title={"Brilliant Golf Resort in Thracian Cliffs"} description={"From 1050$ P.P"}/>
        </div>
      </Slider>
    </div>
  );
};

export default CategoriesTab;
