import React from "react";
import Heading from "../Heading";
import { IoMdLogIn } from "react-icons/io";
import { GoCreditCard } from "react-icons/go";
import { RiCouponLine } from "react-icons/ri";

const HowItWorks = () => {
  return (
    <div className="flex flex-col p-5 lg:p-10">
      <Heading title="How it works?" />
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 items-center justify-center">
        <div className="w-[250px] bg-white rounded-lg p-3 flex flex-col items-center justify-center gap-5">
          <div className="bg-[#FDDDDE] rounded-lg w-14 h-14 flex items-center justify-center ">
            <IoMdLogIn />
          </div>
          <h1 className="text-center text-sm font-bold">Signup</h1>
          <h1 className="text-center text-sm">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there
          </h1>
        </div>
        <div className="w-[250px] bg-white rounded-lg p-3 flex flex-col items-center justify-center gap-5">
          <div className="bg-[#FDDDDE] rounded-lg w-14 h-14 flex items-center justify-center ">
            <RiCouponLine />
          </div>
          <h1 className="text-center text-sm font-bold">Choose Coupon</h1>
          <h1 className="text-center text-sm">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there
          </h1>
        </div>
        <div className="w-[250px] bg-white rounded-lg p-3 flex flex-col items-center justify-center gap-5">
          <div className="bg-[#FDDDDE] rounded-lg w-14 h-14 flex items-center justify-center ">
            <GoCreditCard />
          </div>
          <h1 className="text-center text-sm font-bold">Grab Coupon</h1>
          <h1 className="text-center text-sm">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
