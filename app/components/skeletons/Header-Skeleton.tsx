const HeaderSkeleton = () => (
  <header className="flex justify-between px-5 items-center bg-gray-100 h-20 ">
    {/* Logo Skeleton */}
    <div className="flex flex-row gap-2 items-center   mx-2">
      <div className="h-14 w-14 bg-gray-300 animate-pulse rounded-full p-2"></div>
    </div>

    {/* Navigation Links Skeleton */}
    <nav className="flex sm:flex space-x-10 items-center">
      <div className="h-6 w-16 bg-gray-300 animate-pulse rounded"></div>
      <div className="h-10 w-10 bg-gray-300 animate-pulse rounded-full"></div>
    </nav>
  </header>
);

export default HeaderSkeleton;
