import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className=" flex flex-col justify-between  h-screen bg-yellow-50  ">
      <Header />
      <Hero />
    </div>
  );
}
