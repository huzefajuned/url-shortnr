"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const shortUrl = window.location.href;

    setLoading(true);
    (async () => {
      try {
        const response = await axios.post("/api/redirect", { shortUrl });
        const originalUrl = response.data.originalUrl.originalUrl;

        if (response && response.status === 200) {
          toast.success(`${response.data.message}`);
          // Redirect to the original URL
          window.location.replace(originalUrl);
        }
      } catch (error) {
        console.log("error:", error);
        toast.error("Failed to retrieve original URL.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <p>test</p>
      {loading && <div>...loadig.... </div>}
    </div>
  );
};

export default Page;
