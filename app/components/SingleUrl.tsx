"use client";
import React from "react";
import {  SingleUrlProps } from "../types/types";

const SingleUrl = ({ shortedUrls }: SingleUrlProps) => {
  return (
    <>
      {shortedUrls.map((url, index: number) => (
        <div
          key={index}
          className="w-full md:w-2/3 lg:w-1/2 p-4 bg-white shadow-md rounded-md border border-gray-200"
        >
          <p className="text-gray-600 font-semibold">Original URL:</p>
          <a
            href={url.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline break-words"
          >
            {url.originalUrl}
          </a>

          <p className="text-gray-600 font-semibold mt-2">Short URL:</p>
          <a
            href={url.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline break-words"
          >
            {url.shortUrl}
          </a>
        </div>
      ))}
    </>
  );
};

export default SingleUrl;
