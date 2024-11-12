"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { isValidUrl } from "../lib/common";
import axios from "axios";
import CustomLoader from "./ui/CustomLoader";
import ShortedUrls from "./ShortedUrls";
import AutoSlider from "./AutoSlider";
import CustomButton from "./ui/CustomButton";
import Dev from "./Dev";

const Hero = () => {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // api for short an URL
  const shortUrl = async (url: string) => {
    setLoading(true);
    try {
      // Send a POST request with the original URL in the body
      const response = await axios.post("/api/url", { url });
      // toast after succes create
      if (response.status === 201) {
        toast.success(`${response.data.message}`);
      }
      // toast  if duplicate  found!

      if (response.status === 200) {
        toast.success(`${response.data.message}`);
      }
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
    // console.log("_isValidUrl is ", _isValidUrl);
    if (!_isValidUrl) {
      toast.error("please check URL once!");
    } else {
      shortUrl(url);
    }
  };

  return (
    <div className="flex  flex-col   items-center justify-around  rounded-lg  m-2 h-[85vh]">
      <div className="flex  flex-col sm:flex-row  items-center justify-around  rounded-lg m-2 h-[85vh]">
        <div className=" flex flex-col justify-center   p-2 sm:p-8 w-full   sm:w-2/3 h-full  rounded-xl ">
          <h1 className="text-4xl sm:text-6xl font-bold w-full">
            Shorten Your Links Instantly!!
          </h1>

          <div className="flex items-center max-w-lg gap-5 mt-6  sm:mt-10">
            <input
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              placeholder="Paste your URL here"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}

            <CustomButton
              btnTitle="Shorten"
              onClick={() => onSubmit_(url)}
              customStyle="bg-green-500 p-3 text-md"
            />
          </div>
        </div>
        {/* horted URLS separated Components!!! */}
        <ShortedUrls />
        {/*  CustomLoader Components!!! */}
        {loading && <CustomLoader type="auto" />}
      </div>
      <AutoSlider />
      <Dev />
    </div>
  );
};

export default Hero;
