import HeroImg from "../assets/hero-img.jpg";
import NavBar from "./NavBar";
import Hero from "./Hero";

function HeroSection() {
  return (
    <div className="relative h-screen w-full top-0">
      <img src={HeroImg} alt="Hero" className="h-full w-full shadow-md blur-[1px] object-cover" />

      <div className="absolute top-0 px-30">
        <NavBar />
      </div>

      <div className="absolute top-30 w-full h-100 items-center justify-center">
        <Hero />
      </div>
    </div>
  );
}

export default HeroSection;