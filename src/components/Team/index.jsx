import React from "react";
import mobile from "../../assets/mobile.png";
import { FaApple } from "react-icons/fa";
import playstore from "../../assets/playstore.webp";

const Team = () => {
  return (
    <div className="flex items-center justify-center p-5 lg:p-10 ">
      <div className="relative bg-[#FDDDDE] flex lg:flex-row flex-col rounded-lg items-center justify-between lg:w-[60%] w-full">
        <div className="flex flex-col m-3 lg:m-10 gap-5">
          <h1 className="text-[#F01C21] font-bold text-3xl w-full lg:w-[60%]">
            Want to be a part of our team
          </h1>
          <h1 className="text-lg w-full lg:w-[60%]">
            Be a part of best site of discount coupons
          </h1>
          <div className="flex lg:flex-row flex-col  gap-5">
            <div className="bg-white flex flex-row gap-2 items-center justify-center w-[130px] rounded-lg p-2">
              <FaApple className="text-3xl" />
              <div>
                <h1 className="text-[8px]">Download From</h1>
                <h1 className="text-sm font-bold">APP STORE</h1>
              </div>
            </div>
            <div className="bg-white flex flex-row gap-2 items-center justify-center w-[130px] rounded-lg p-2">
              <img className="w-5" src={playstore} />
              <div>
                <h1 className="text-[8px]">Download From</h1>
                <h1 className="text-sm font-bold">PLAY STORE</h1>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full lg:w-[50%]" src={mobile} />
      </div>
    </div>
  );
};

export default Team;
