import React from "react";
import HeaderSkeleton from "./Header-Skeleton";
import FooterSkeleton from "./Footer-Skeleton";

const MainSkeleton = () => {
  return (
    <>
      <HeaderSkeleton />

      <div className="flex flex-col sm:flex-row items-center justify-around rounded-lg m-2 h-[75vh] bg-gray-100 w-full sm:w-11/12 p-4 overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-full p-0 sm:p-8 sm:w-2/3 lg:w-4/5 h-auto sm:h-full rounded-xl">
          <div className="h-12 w-2/3 bg-gray-300 animate-pulse rounded mb-4"></div>

          <div className="flex flex-col w-full sm:flex-row sm:p-2 items-center gap-5 mt-6 sm:mt-10 p-2">
            <div className="w-full h-14 bg-gray-300 animate-pulse rounded"></div>

            <div className="flex flex-row gap-5 items-center justify-between">
              <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full"></div>
              <div className="w-28 h-14 bg-gray-300 animate-pulse rounded"></div>
            </div>
          </div>
        </div>

        {/* Right Section - Recent Short URLs */}
        <div className="w-full h-1/2 sm:min-h-full sm:w-2/3 lg:min-w-1/3 flex flex-col gap-5 justify-around items-center text-center overflow-scroll rounded-md mt-2 mr-2">
          <div className="h-8 w-48 bg-gray-300 animate-pulse rounded"></div>

          <div className="flex flex-col items-center space-y-4 gap-2 w-full h-auto">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="w-full h-12 bg-gray-300 animate-pulse rounded"
              ></div>
            ))}

            <div className="w-28 h-10 bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
      <FooterSkeleton />
    </>
  );
};

export default MainSkeleton;
