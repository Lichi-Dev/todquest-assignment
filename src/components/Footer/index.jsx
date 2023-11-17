import React from "react";
import logo from "../../assets/logoWhite.png";
import { FaApple } from "react-icons/fa";
import playstore from "../../assets/playstore.webp";

const Footer = () => {
  return (
    <div className="bg-[#091431] p-5 lg:p-10 gap-5 lg:gap-0 flex flex-col lg:flex-row justify-around items-start ">
      <div className="flex flex-col gap-5 w-full lg:w-[30%]">
        <img src={logo} className="w-[120px]" />
        <p className="text-white">
          Lorem Ipsum is simply dummy of the printing and type setting.
        </p>
        <div className="flex flex-col gap-5">
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
      <div className="flex flex-row w-full lg:w-[30%] gap-12 lg:justify-around">
        <div>
          <h1 className="text-[#F01C21]">Company</h1>
          <ul className="text-white list-disc list-inside">
            <li className="mt-2">About Us</li>
            <li className="mt-2">Privacy Policy</li>
            <li className="mt-2">Terms</li>
            <li className="mt-2">Blogs</li>
            <li className="mt-2">Branding</li>
            <li className="mt-2">Career</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#F01C21]">General</h1>
          <ul className="text-white list-disc list-inside">
            <li className="mt-2">Partner With us</li>
            <li className="mt-2">Write to us</li>
            <li className="mt-2">Mobile App</li>
            <li className="mt-2">Site map</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row w-full lg:w-[30%] gap-12 lg:justify-around">
        <div>
          <h1 className="text-[#F01C21]">Pages</h1>
          <ul className="text-white list-disc list-inside">
            <li className="mt-2">Amazon Offer</li>
            <li className="mt-2">Google Pay Offers</li>
            <li className="mt-2">PayPal Offers</li>
            <li className="mt-2">PhonePe Offers</li>
            <li className="mt-2">Festival Offers</li>
            <li className="mt-2">Bank Offers</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#F01C21]">More</h1>
          <ul className="text-white list-disc list-inside">
            <li className="mt-2">City Offers</li>
            <li className="mt-2">Brand Offers</li>
            <li className="mt-2">Product Deals</li>
            <li className="mt-2">Gift Cards</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
