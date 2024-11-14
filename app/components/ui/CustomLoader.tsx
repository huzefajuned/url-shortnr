import type { CustomLoaderProps } from "@/app/types/types";
import type React from "react";

const CustomLoader: React.FC<CustomLoaderProps> = ({ type }) => {
  return (
    <div
      className={`${
        type === "auto"
          ? "w-auto bg-fuchsia-400 absolute top-0 ring-0"
          : "w-screen  absolute  top-0 right-0 border-2"
      } flex items-center justify-center backdrop-blur-sm z-10  h-screen`}
    >
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div className="loader"></div>
    </div>
  );
};

export default CustomLoader;
