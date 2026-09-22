import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import TechnologySection from "./components/TechnologySection";

function App() {
  return (
    <div className="App bg-gray-100">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TechnologySection />
    </div>
  );
}

export default App;