import React from "react";
import Heading from "../Heading";
import sunglass from "../../assets/sunglass.png";
import Carousel from "react-material-ui-carousel";
import membership1 from "../../assets/membership-1.png";
import membership2 from "../../assets/membership-2.png";
import membership3 from "../../assets/membership-3.png";
import membership4 from "../../assets/membership-4.png";
const PopularMembership = () => {
  return (
    <div className="p-5 lg:p-10 flex flex-col items-center justify-center gap-5">
      <img className="w-full lg:w-[60%]" src={sunglass} />
      <Heading title="PopularMembership" />
      <Carousel animation="slide" className="lg:w-[60%] w-full mt-10">
        <div className="flex flex-row items-center justify-center flex-wrap gap-5">
          <img className="w-[48%]" src={membership1} />
          <img className="w-[48%]" src={membership2} />
          <img className="w-[48%]" src={membership3} />
          <img className="w-[48%]" src={membership4} />
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap gap-5">
          <img className="w-[48%]" src={membership1} />
          <img className="w-[48%]" src={membership2} />
          <img className="w-[48%]" src={membership3} />
          <img className="w-[48%]" src={membership4} />
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap gap-5">
          <img className="w-[48%]" src={membership1} />
          <img className="w-[48%]" src={membership2} />
          <img className="w-[48%]" src={membership3} />
          <img className="w-[48%]" src={membership4} />
        </div>
      </Carousel>
    </div>
  );
};

export default PopularMembership;
