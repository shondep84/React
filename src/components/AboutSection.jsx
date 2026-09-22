import About from "./About";
import AboutCard from "./AboutCard";
import AboutContainer from "./AboutContainer";

function AboutSection() {
  return (
    <div className="flex flex-col h-180 w-full px-30 py-20 bg-black bg-opacity-40">
      <About />
      <div className="flex gap-5 mt-10">
          <AboutContainer />
        <div className="grid grid-cols-2 gap-5">
          <AboutCard heading='100+' paragraph='Vehicle Ready' />
          <AboutCard heading='120+' paragraph='Charging Outlet' />
          <AboutCard heading='4K+' paragraph='Happy Clients' />
          <AboutCard heading='80+' paragraph='Office in the world' /> 
        </div>
      </div>
    </div>
  );
}

export default AboutSection;