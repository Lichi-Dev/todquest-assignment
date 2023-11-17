import React from "react";
import newsletter from "../../assets/newsletter.png";

const Newsletter = () => {
  return (
    <div className="bg-[#D3D3D3] flex items-center justify-center p-2 lg:p-10 ">
      <div className="flex lg:flex-row flex-col p-2 rounded-lg bg-white items-center gap-10">
        <img src={newsletter} />
        <div className="w-full lg:w-[50%] flex flex-col gap-5">
          <h1 className="w-full lg:w-[70%] font-bold text-3xl">
            Subscribe to our Newsletter!
          </h1>
          <p className="w-full lg:w-[70%]">
            Be the first to get exclusive offers ands the latest news
          </p>
          <input
            className="flex-grow w-[100%] p-2 bg-transparent border-2 rounded-lg"
            placeholder="Enter your email address"
          />
          <button className="bg-[#F01C21] text-white rounded-lg p-3 w-full lg:w-[40%]">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
