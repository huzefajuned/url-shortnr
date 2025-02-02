import React from "react";

const FooterSkeleton = () => {
  return (
    <footer className="bg-slate-100 w-full py-4">
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:justify-between container mx-auto px-4">
        {/* Developer Name Skeleton */}
        <div className="flex items-center space-x-0 sm:space-x-2">
          <div className="h-4 w-48 bg-gray-300 animate-pulse rounded"></div>
          <div className="h-4 w-40 bg-gray-300 animate-pulse rounded hidden sm:inline-block"></div>
        </div>

        {/* Social Icons & Avatar Skeleton */}
        <div className="flex items-center space-x-4">
          <div className="h-6 w-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="h-6 w-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="h-10 w-10 bg-gray-300 animate-pulse rounded-full"></div>
        </div>

        {/* Copyright Text Skeleton */}
        <div className="text-gray-600 hidden sm:flex text-sm">
          <div className="h-4 w-56 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;
