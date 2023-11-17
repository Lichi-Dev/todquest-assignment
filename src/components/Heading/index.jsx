import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl">{title}</h1>
      <hr className="w-16 h-1 mx-auto my-4 bg-red-500 border-0 rounded  dark:bg-red-500" />
    </div>
  );
};

export default Heading;
