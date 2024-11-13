"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleUrl from "./SingleUrl";
import type { shortedUrlsProps } from "../types/types";
import CustomLoader from "./ui/CustomLoader";

const ShortedUrls = () => {
  const [shortedUrls, setShortedUrls] = useState<shortedUrlsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // console.log("shortedUrls :", shortedUrls);

  // RETRIEVE ALL SHORTED URLs
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await axios.get("/api/url");

        // console.log("data ", data);
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
    <div className=" bg--500 w-full h-full sm:min-h-full sm:w-2/3 lg:min-w-1/3  flex  flex-col  gap-5 justify-around items-center  text-center overflow-scroll  rounded-md mt-2 mr-2">
      <h1 className="text-xl sm:text-4xl font-bold text-center">
        Shortened URLs
      </h1>

      <div className="flex flex-col items-center space-y-4  gap-2  w-full h-auto">
        {shortedUrls.length > 0 && !loading ? (
          <>
            <SingleUrl shortedUrls={shortedUrls} />
            <div>View All</div>
          </>
        ) : (
          <p className="text-gray-700">No URLs have been shortened yet.</p>
        )}
        {loading && <CustomLoader type="auto" />}
      </div>
    </div>
  );
};

export default ShortedUrls;
