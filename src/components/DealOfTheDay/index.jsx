import React from "react";
import Heading from "../Heading";
import Carousel from "react-material-ui-carousel";
import amazon from "../../assets/amazon.png";

const arr = [1, 2, 3, 4];

const DealOfTheDay = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading title="Deal of the day" />
      <Carousel animation="slide" className="lg:w-[60%] w-full mt-10">
        <div className="flex flex-row items-center justify-center flex-wrap gap-5">
          {arr.map(() => (
            <div className="flex flex-col items-center justify-center gap-3 rounded-md bg-white p-5 w-[200px]">
              <img className="w-[80px]" src={amazon} />
              <h1 className="font-semibold text-sm text-black text-center">
                Amazon
              </h1>
              <h1 className="text-sm font-bold text-[#3BA615] text-center">
                Flat 30% Off
              </h1>
              <button className="bg-[#F01C21] rounded-md p-2 text-white w-full mt-4">
                Grab now
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap gap-5">
          {arr.map(() => (
            <div className="flex flex-col items-center justify-center gap-3 rounded-md bg-white p-5 w-[200px]">
              <img className="w-[80px]" src={amazon} />
              <h1 className="font-semibold text-sm text-black text-center">
                Amazon
              </h1>
              <h1 className="text-sm font-bold text-[#3BA615] text-center">
                Flat 30% Off
              </h1>
              <button className="bg-[#F01C21] rounded-md p-2 text-white w-full mt-4">
                Grab now
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap gap-5">
          {arr.map(() => (
            <div className="flex flex-col items-center justify-center gap-3 rounded-md bg-white p-5 w-[200px]">
              <img className="w-[80px]" src={amazon} />
              <h1 className="font-semibold text-sm text-black text-center">
                Amazon
              </h1>
              <h1 className="text-sm font-bold text-[#3BA615] text-center">
                Flat 30% Off
              </h1>
              <button className="bg-[#F01C21] rounded-md p-2 text-white w-full mt-4">
                Grab now
              </button>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default DealOfTheDay;
