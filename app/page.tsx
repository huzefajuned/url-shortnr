"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainSkeleton from "./components/skeletons/Main-Skeleton";
import useAuthStore from "./store/user";

export default function Home() {
  const { loading } = useAuthStore();

  if (loading) return <MainSkeleton />;
  return (
    <div className=" flex flex-col justify-between  h-screen bg-transparent">
      <Header />
      <Hero />
    </div>
  );
}
