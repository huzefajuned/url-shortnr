import React from "react";
import Marquee from "react-fast-marquee";

const features = [
  { title: "Easy" },
  { title: "Shortened" },
  { title: "Secure" },
  { title: "Reliable" },
  { title: "Devices" },
];

const AutoSlider = () => {
  return (
    <div className=" m-2  p-2 w-full">
      <Marquee speed={100} gradient={false} direction="right">
        {features.map((feature, index) => (
          <div
            key={`${index * 2}`}
            className="flex flex-row justify-between  w-full text-center cursor-pointer"
          >
            <div className=" bg-gray-200 hover:bg-gray-400 hover:text-white p-2 sm:p-3 rounded-lg shadow-lg w-32 mx-2 hover:scale-105 transition-transform duration-300">
              <h3 className="font-semibold text-xs sm:text-sm ">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AutoSlider;
