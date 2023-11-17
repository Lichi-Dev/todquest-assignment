import React from "react";
import { FaHome } from "react-icons/fa";
import Carousel from "react-material-ui-carousel";
import carouselImage from "../../assets/carousel.png";

const Hero = () => {
  return (
    <div className="p-3 lg:p-10 flex flex-row items-center justify-center">
      <Carousel animation="slide" className="lg:w-[60%] w-full">
        <div>
          <img src={carouselImage} className="w-full" />
        </div>
        <div>
          <img src={carouselImage} className="w-full" />
        </div>
        <div>
          <img src={carouselImage} className="w-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
