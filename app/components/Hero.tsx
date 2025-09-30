"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { isValidUrl } from "../lib/common";
import axios from "axios";
import Dev from "./Footer";
import PasteIcon from "../images/paste.png";
import ShareModel from "./ShareModel";
import Image from "next/image";
import { Input } from "@/app/components/ui/input";
import { Spinner } from "@/app/components/ui/spinner";
import { ShinyButton } from "@/app/components/ui/shiny-button";
import useAuthStore from "../store/user";

const Hero = () => {
  const { user } = useAuthStore();
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
        // loginWithGoogle();
        return;
      }
      // Send a POST request with the original URL in the body
      const response = await axios.post("/api/url", { url });

      if (response.status === 201) {
        toast.success(`${response.data.message}`);
      }
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
      <div className="flex  flex-col sm:flex-row  items-center justify-around  shadow-md  rounded-lg m-2 h-[85vh] bg-gray-50  w-full sm:w-11/12 p-4 overflow-hidden">
         <div className="flex flex-col justify-center w-full sm:w-2/3 lg:w-4/5 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Shorten URLs, Share{" "}
            <span className="text-red-400">Effortlessly</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mt-4 sm:mt-6">
            Transform long, complex URLs into short, shareable links with
            powerful analytics and QR code generation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 sm:mt-10 w-full">
            <button
              aria-label="Paste from clipboard"
              onClick={handlePaste}
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition"
            >
              <Image
                src={PasteIcon}
                alt="Paste Icon"
                className="w-6 h-6 cursor-pointer"
              />
            </button>

            <Input
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              value={url}
              placeholder="Paste URL here"
              className="flex-1 px-3 py-4 sm:py-8 text-base sm:text-2xl"
            />

            <ShinyButton
              onClick={() => onSubmit_(url)}
              className="py-4 sm:py-5 px-6 text-base sm:text-lg mt-4 sm:mt-0 z-0  text-white hover:bg-gray-200 transition "
            >
              Shorten
            </ShinyButton>
          </div>
        </div>
        {/* show model */}

        {showModel && (
          <ShareModel
            title={newShortedUrl}
            closeMe={() => setShowModel(false)}
          />
        )}

        {/*  CustomLoader Components!!! */}
        {loading && <Spinner size="large" />}
      </div>
      {/* horted URLS separated Components!!! */}
      {/* <ShortedUrls /> */}
      {/* slider and developer components! */}
      {/* <AutoSlider /> */}
      <Dev />
    </div>
  );
};

export default Hero;
