import type React from "react";
import type { CustomButtonProps } from "@/app/types/types";
const CustomButton: React.FC<CustomButtonProps> = ({
  btnTitle,
  customStyle,
  onClick,
}) => {
  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button
      onClick={onClick}
      className={`${customStyle} w-24 p-1 bg-blue-400 hover:bg-blue-600 text-white rounded-lg shadow-xl border-2`}
    >
      {btnTitle}
    </button>
  );
};

export default CustomButton;
