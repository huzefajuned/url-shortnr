"use client";
import React, { useState } from "react";
import type { SingleUrlProps, UrlDetails } from "../types/types";
import QRCode from "react-qr-code";
import ShareModel from "./ShareModel";
import toast from "react-hot-toast";

const SingleUrl = ({ shortedUrls }: SingleUrlProps) => {
  // simple state for show/hide ShareModel Component.
  const [show, setShow] = useState<boolean>(false);
  const [current, setCurrent] = useState<string>("");

  const showUrlDetails = (url: UrlDetails) => {
    setCurrent(url.shortUrl);
    setShow(true);
  };

  // close Share Model
  const closeShareModel = () => {
    setShow(false);
  };
  return (
    <div className=" flex flex-col gap-3">
      {shortedUrls.map((url, index: number) => (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          onClick={() => showUrlDetails(url)}
          onMouseEnter={() => toast.success("click for more info!")}
          key={`${index * 2}`}
          className="  flex flex-row justify-between items-center  md:w-2/3 lg:w-full p-2 sm:p-4 bg-purple-50 rounded-lg hover:bg-green-300 shadow-lg cursor-pointer "
        >
          <QRCode
            value={url.shortUrl}
            className=" w-20 h-20 sm:w-12 sm:h-12"
            // onMouseEnter={()=>toast.success('clciks on QR')}
          />
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
        </div>
      ))}
      {show && <ShareModel title={current} closeMe={closeShareModel} />}
    </div>
  );
};

export default SingleUrl;
