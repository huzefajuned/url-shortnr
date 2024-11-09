"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { isValidUrl } from "../utils/common";
import axios from "axios";
import Loader from "./ui/Loader";

const Hero = () => {
  interface shortedUrlsType {
    originalUrl: string;
    shortUrl: string;
  }
  const [shortedUrls, setShortedUrls] = useState<shortedUrlsType>();
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // api for short an URL
  const shortUrl = async (url: string) => {
    setLoading(true);
    try {
      // Send a POST request with the original URL in the body
      const response = await axios.post("/api/url", { url });
      console.log("Data in client:", response.data);
    } catch (error) {
      console.error("Error in client:", error);
    } finally {
      setLoading(false);
    }
  };

  //
  const onSubmit_ = (url: string) => {
    // 1 valdidate  url on client...
    const _isValidUrl = isValidUrl(url);
    console.log("_isValidUrl is ", _isValidUrl);
    if (!_isValidUrl) {
      toast.error(`please check URL once! , ${_isValidUrl}`);
    } else {
      toast.success(`URL IS : ', ${url}`);
      shortUrl(url);
    }
    // 2 send url to server t shorten
  };

  // RETIEVE ALL SHORTED URLs
  useEffect(() => {
    (async function () {
      const data = await axios.get("/api/url");

      console.log("data", data);

      if (data) {
        if ((data.status = 200)) {
          toast.success(`${data.data.message}`);
          setShortedUrls(data.data.urls);
        }
      }
    })();
  }, []);

  console.log(" shortedUrls is ", shortedUrls);
  return (
    <div className="h-full flex items-center justify-center w-full">
      <div className="text-center   mx-auto p-8 w-full ">
        <h1 className="text-8xl font-bold w-full">
          Shorten Your Links Instantly!!
        </h1>
        <p className="text-white m-8">
          Enter your long URL below, and we’ll make it short and easy to share.
        </p>

        <div className="flex items-center max-w-lg m-auto mt-10">
          <input
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Paste your URL here"
            className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => onSubmit_(url)}
            className="bg-blue-600 text-white px-6 py-3 rounded-r-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Shorten
          </button>
        </div>
      </div>

      <div className="text-center   mx-auto p-8 w-full ">
        <h2>Shorted URLs....</h2>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Hero;
