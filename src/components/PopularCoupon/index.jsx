import React, { useState } from "react";
import { IoTrophyOutline } from "react-icons/io5";
import { RiTimerLine } from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import Carousel from "react-material-ui-carousel";
import amazon from "../../assets/amazon.png";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const PopularCoupon = () => {
  const [buttonSelected, setButtonSelected] = useState("Popular Coupons");
  const clickButton = (item) => {
    setButtonSelected(item);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="flex flex-col lg:flex-row gap-5 items-center">
        <button
          onClick={() => clickButton("Popular Coupons")}
          className={
            buttonSelected == "Popular Coupons"
              ? "bg-white text-red-600 rounded-md flex flex-col lg:flex-row items-center gap-2 p-3"
              : "flex flex-col lg:flex-row items-center gap-2 p-3"
          }
        >
          <IoTrophyOutline className="text-black" />
          Popular Coupons
        </button>
        <button
          onClick={() => clickButton("Ending Soon")}
          className={
            buttonSelected == "Ending Soon"
              ? "bg-white text-red-600 rounded-md flex flex-col lg:flex-row items-center gap-2 p-3"
              : "flex flex-col lg:flex-row items-center gap-2 p-3"
          }
        >
          <RiTimerLine className="text-black" />
          Ending Soon
        </button>
        <button
          onClick={() => clickButton("Latest Coupons")}
          className={
            buttonSelected == "Latest Coupons"
              ? "bg-white text-red-600 rounded-md flex flex-col lg:flex-row items-center gap-2 p-3"
              : "flex flex-col lg:flex-row items-center gap-2 p-3"
          }
        >
          <AiOutlineFire className="text-black" />
          Latest Coupons
        </button>
      </div>

      <Carousel animation="slide" className="lg:w-[60%] w-full mt-10">
        <div className="flex flex-row items-center justify-center flex-wrap gap-5">
          {arr.map(() => (
            <div className="flex flex-col items-center justify-center gap-5 rounded-md bg-white p-3 w-[200px]">
              <h1 className="text-sm font-bold text-[#3BA615] text-center">
                Upto 60% off on Appliances
              </h1>
              <img className="w-[80px]" src={amazon} />
              <h1 className="text-xs text-[#878787] text-center">
                Upto 60% off on summer Appliances
              </h1>
              <button className="bg-[#F01C21] rounded-md p-2 text-white w-full mt-8">
                Grab now
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap gap-5">
          {arr.map(() => (
            <div className="flex flex-col items-center justify-center gap-5 rounded-md bg-white p-3 w-[200px]">
              <h1 className="text-sm font-bold text-[#3BA615] text-center">
                Upto 60% off on Appliances
              </h1>
              <img className="w-[80px]" src={amazon} />
              <h1 className="text-xs text-[#878787] text-center">
                Upto 60% off on summer Appliances
              </h1>
              <button className="bg-[#F01C21] rounded-md p-2 text-white w-full mt-8">
                Grab now
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap gap-5">
          {arr.map(() => (
            <div className="flex flex-col items-center justify-center gap-5 rounded-md bg-white p-3 w-[200px]">
              <h1 className="text-sm font-bold text-[#3BA615] text-center">
                Upto 60% off on Appliances
              </h1>
              <img className="w-[80px]" src={amazon} />
              <h1 className="text-xs text-[#878787] text-center">
                Upto 60% off on summer Appliances
              </h1>
              <button className="bg-[#F01C21] rounded-md p-2 text-white w-full mt-8">
                Grab now
              </button>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default PopularCoupon;
