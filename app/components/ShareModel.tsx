import type React from "react";
import toast from "react-hot-toast";
import QRCode from "react-qr-code";
import type { ShareModelProps } from "../types/types";

const ShareModel: React.FC<ShareModelProps> = ({ title, closeMe }) => {
  // Function to copy URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(title);
    toast.success("URL copied to clipboard!");
  };

  // Share options for social media
  const shareOptions = [
    {
      name: "WhatsApp",
      url: `https://wa.me/?text=${encodeURIComponent(title)}`,
      icon: "📱", 
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(title)}`,
      icon: "🐦",
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        title
      )}`,
      icon: "📘",
    },
  ];

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={() => closeMe()}
      className="absolute top-0 left-0 w-full h-full  bg-opacity-80 backdrop-blur-sm flex justify-center items-center"
    >
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className="rounded-xl shadow-lg p-6 max-w-xl w-full transform transition-transform duration-300 ease-in-out border-2 border-gray-400 bg-white"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <p className="text-gray-600 font-semibold text-xs sm:text-lg">
            Short URL:
          </p>
          <a
            href={title}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold text-xs sm:text-lg truncate"
          >
            {title}
          </a>
        </div>

        <QRCode
          value={title}
          className="w-40 h-40 sm:w-40 sm:h-40 mx-auto mb-4"
        />

        {/* Share and Copy Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Copy URL
          </button>
          {shareOptions.map((option) => (
            <a
              key={option.name}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
            >
              <span className="mr-2">{option.icon}</span> Share on {option.name}
            </a>
          ))}
        </div>

        {/* Close Button */}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={closeMe}
          className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareModel;
