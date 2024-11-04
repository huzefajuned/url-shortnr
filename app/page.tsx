import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className=" flex flex-col  h-screen">
      <Header />
      <Hero />
    </div>
  );
}
