import { CustomLoaderProps } from "@/app/types/types";
import React from "react";

const CustomLoader: React.FC<CustomLoaderProps> = ({ type }) => {
  return (
    <div
      className={`${
        type === "auto" ? "w-auto" : "w-screen fixed inset-0"
      } flex items-center justify-center backdrop-blur-md z-50`}
    >
      <div className="loader"></div>
    </div>
  );
};

export default CustomLoader;
