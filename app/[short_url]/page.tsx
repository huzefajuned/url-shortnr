"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const RedirectPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const shortUrl = window.location.href;
        const response = await axios.post("/api/redirect", { shortUrl });
        
        if (response.status === 200) {
          const originalUrl = response.data.originalUrl.originalUrl;
          toast.success(response.data.message);
          window.location.replace(originalUrl);
        } else {
          throw new Error("Unexpected response status");
        }
      } catch (error) {
        console.error("Redirection error:", error);
        setError("Failed to retrieve original URL.");
        toast.error("Failed to redirect. Please check the link.");
      } finally {
        setLoading(false);
      }
    };

    fetchOriginalUrl();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-center p-4">
      {loading ? (
        <div className="text-lg font-semibold">Redirecting, please wait...</div>
      ) : error ? (
        <div className="text-red-500 font-medium">{error}</div>
      ) : (
        <div className="text-gray-600">If not redirected, please refresh the page.</div>
      )}
    </div>
  );
};

export default RedirectPage;