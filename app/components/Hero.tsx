"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { isValidUrl } from "../lib/common";
import axios from "axios";
import ShortedUrls from "./ShortedUrls";
import Dev from "./Footer";
import PasteIcon from "../images/paste.png";
import ShareModel from "./ShareModel";
import Image from "next/image";
import { Input } from "@/app/components/ui/input";
import { Spinner } from "@/app/components/ui/spinner";
import { ShinyButton } from "@/app/components/ui/shiny-button";
import useAuthStore from "../store/user";

const Hero = () => {
  const { user, loginWithGoogle } = useAuthStore();
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showModel, setShowModel] = useState<boolean>(false);
  const [newShortedUrl, setNewShortedUrl] = useState<string>("");

  //  handling copy & paste
  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setUrl(clipboardText);
      toast.success("paste done!");
    } catch (err) {
      toast.error("Failed to paste");
      console.error("Failed to paste: ", err);
    }
  };

  // api for short an URL
  const shortUrl = async (url: string) => {
    setLoading(true);
    try {
      console.log();
      //  ask user to login first
      if (!user) {
        toast.success(" please login to continue");
          loginWithGoogle();
        return;
      }
      // Send a POST request with the original URL in the body
      const response = await axios.post("/api/url", { url });

      console.log("response in  shortUrl", response);
      // toast after succes create
      if (response.status === 201) {
        toast.success(`${response.data.message}`);
      }
      // toast  if duplicate  found!

      if (response.status === 200) {
        toast.success(`${response.data.message}`);
      }

      // show model  after new short url creation with share features
      if (response.status === 200 || response.status === 201) {
        setNewShortedUrl(response.data.newUrl.shortUrl);
        setShowModel(true);
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

  // Skeleton

  return (
    <div className="flex  flex-col  items-center justify-around  rounded-lg  h-[90vh] w-full ">
      <div className="flex  flex-col sm:flex-row  items-center justify-around border-2 shadow-md  rounded-lg m-2 h-[85vh] bg-gray-100  w-full sm:w-11/12 p-4 overflow-hidden">
        <div className=" flex flex-col justify-center w-full   p-0 sm:p-8    sm:w-2/3 lg:w-4/5  h-auto sm:h-full  rounded-xl ">
          <h1 className="text-4xl sm:text-5xl font-bold w-full">
            Shorten Your Links Instantly!!
          </h1>

          <div className="flex flex-col w-full  sm:flex-row sm:p-2 items-center  gap-0 sm:gap-5 mt-6  sm:mt-10  p-2">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}

            <Input
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              value={url}
              placeholder="Paste URL here"
              className="py-6"
            />

            <div className=" flex flex-row  gap-5 items-center justify-between">
              <Image
                onClick={() => handlePaste()}
                src={PasteIcon}
                alt="Paste Icon"
                className="w-6 h-6 mr-1  cursor-pointer"
              />

              <ShinyButton
                onClick={() => onSubmit_(url)}
                className="py-6 mt-5 sm:m-0 hover:bg-gray-200"
              >
                {" "}
                Shorten
              </ShinyButton>
            </div>
          </div>
        </div>
        {/* show model */}

        {showModel && (
          <ShareModel
            title={newShortedUrl}
            closeMe={() => setShowModel(false)}
          />
        )}

        {/* horted URLS separated Components!!! */}
        <ShortedUrls />

        {/*  CustomLoader Components!!! */}
        {loading && <Spinner size="large" />}
      </div>

      {/* slider and developer components! */}
      {/* <AutoSlider /> */}
      <Dev />
    </div>
  );
};

export default Hero;
