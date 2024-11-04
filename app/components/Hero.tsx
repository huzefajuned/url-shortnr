import React from "react";

const Hero = () => {
  return (
    <div className="h-full flex items-center justify-center w-full bg-purple-700">
      <div className="text-center   mx-auto p-8 w-full ">
        <h1 className="text-8xl font-bold w-full">
          Shorten Your Links Instantly!!
        </h1>
        <p className="text-white m-8">
          Enter your long URL below, and we’ll make it short and easy to share.
        </p>

        <div className="flex items-center max-w-lg m-auto mt-10">
          <input
            type="text"
            placeholder="Paste your URL here"
            className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md font-semibold hover:bg-blue-700 transition duration-300">
            Shorten
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
