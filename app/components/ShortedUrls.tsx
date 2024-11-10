"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleUrl from "./SingleUrl";
import { shortedUrlsProps } from "../types/types";
import CustomLoader from "./ui/CustomLoader";

const ShortedUrls = () => {
  const [shortedUrls, setShortedUrls] = useState<shortedUrlsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // console.log("shortedUrls :", shortedUrls);

  // RETRIEVE ALL SHORTED URLs
  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const data = await axios.get("/api/url");

        console.log("data ", data);
        if (data && data.status === 200) {
          toast.success(`${data.data.message}`);
          setShortedUrls(data.data.urls);
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to fetch URLs");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className=" p-2 w-1/3 h-[80%] flex  flex-col justify-center items-center  text-center overflow-scroll rounded-lg  border-2 mr-2">
      <h1 className="text-2xl font-bold text-center mb-6">Shortened URLs</h1>

      <div className="flex flex-col items-center space-y-4">
        {shortedUrls.length > 0 && !loading ? (
          <>
            <SingleUrl shortedUrls={shortedUrls} />
            <div>pagination</div>
          </>
        ) : (
          // pagination part

          <p className="text-gray-500">No URLs have been shortened yet.</p>
        )}
        {loading && <CustomLoader type="auto" />}
      </div>
    </div>
  );
};

export default ShortedUrls;
