"use client";
import React, { useState } from "react";
import type { SingleUrlProps, UrlDetails } from "../types/types";
import QRCode from "react-qr-code";
import ShareModel from "./ShareModel";
import { formatUrl } from "../lib/common";

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
    <div className=" flex flex-col gap-3  w-11/12 sm:w-1/2">
      {shortedUrls.map((url, index: number) => (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        // biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation>
        <div
          onClick={() => showUrlDetails(url)}
          key={`${index * 2}`}
          className="  flex flex-row justify-between items-center  md:w-2/3 lg:w-full p-2 sm:p-4 bg-purple-50 rounded-lg hover:bg-green-300 shadow-lg cursor-pointer "
        >
          <QRCode
            value={url.shortUrl}
            className=" w-20 h-20 sm:w-12 sm:h-12"
            // onMouseEnter={()=>toast.success('clciks on QR')}
          />
          <div className=" flex  flex-col sm:flex-row items-center mx-2">
            <p className="text-gray-700 font-bold  mr-2 text-xs sm:text-lg">
              Short URL:
            </p>
            <a
              href={url.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold text-xs sm:text-lg truncate"
            >
              {formatUrl(url.shortUrl)}
            </a>
          </div>
        </div>
      ))}
      {show && <ShareModel title={current} closeMe={closeShareModel} />}
    </div>
  );
};

export default SingleUrl;
