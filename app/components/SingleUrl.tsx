"use client";
import React from "react";
import type { SingleUrlProps } from "../types/types";
import QRCode from "react-qr-code";

const SingleUrl = ({ shortedUrls }: SingleUrlProps) => {
  return (
    <>
      {shortedUrls.map((url, index: number) => (
        <div
          key={index}
          className="flex flex-row justify-between items-center  md:w-2/3 lg:w-full p-2 sm:p-4 bg-purple-50 rounded-lg hover:bg-green-300 "
        >
          <div className=" flex  flex-col sm:flex-row items-center mx-2">
            <p className="text-gray-600 font-semibold text-xs sm:text-lg">
              Short URL:
            </p>
            <a
              href={url.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold text-xs sm:text-lg truncate"
            >
              {url.shortUrl}
            </a>
          </div>
          <QRCode
            value={url.shortUrl}
            // size={50}
            className=" w-20 h-20 sm:w-12 sm:h-12"
          />
        </div>
      ))}
    </>
  );
};

export default SingleUrl;
