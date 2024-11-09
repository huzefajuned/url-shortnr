"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleUrl from "./SingleUrl";

const ShortedUrls = () => {
  interface shortedUrlsType {
    originalUrl: string;
    shortUrl: string;
  }

  const [shortedUrls, setShortedUrls] = useState<shortedUrlsType[]>([]);
  const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("shortedUrls :", shortedUrls);

  // RETRIEVE ALL SHORTED URLs
  useEffect(() => {
    (async function () {
      try {
        const data = await axios.get("/api/url");

        console.log("data ", data);
        if (data && data.status === 200) {
          toast.success(`${data.data.message}`);
          setShortedUrls(data.data.urls);
        }
      } catch (error) {
        toast.error("Failed to fetch URLs");
      }
    })();
  }, []);

  return (
    <div className=" p-2 w-1/3 h-[80%] flex  flex-col justify-center items-center  text-center overflow-scroll rounded-lg  border-2 mr-2">
      <h1 className="text-2xl font-bold text-center mb-6">Shortened URLs</h1>

      <div className="flex flex-col items-center space-y-4">
        {shortedUrls.length > 0 ? (
          <>
           <SingleUrl shortedUrls={shortedUrls}  />
            <div>pagination</div>
          </>
        ) : (
          // pagination part

          <p className="text-gray-500">No URLs have been shortened yet.</p>
        )}
      </div>
    </div>
  );
};

export default ShortedUrls;
