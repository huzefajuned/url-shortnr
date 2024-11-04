import Header from "./components/Header";
import Hero from "./components/Hero";
import bgImg from "../app/images/bg.jpg";

export default function Home() {
  return (
    <div className=" flex flex-col  h-screen">
      <Header />
      <Hero />
    </div>
  );
}
