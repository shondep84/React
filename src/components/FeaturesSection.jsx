import FeaturesHeading from "./FeaturesHeading";
import FeaturesContainer from "./FeaturesContainer";
import FeaturesCars from "./FeaturesCars";
import FeaturesCarsHeading from "./FeaturesCarsHeading";
import assets from "../assets/buggatti.jpg";
import lambo1 from "../assets/lambo1.jpg";
import lambo2 from "../assets/lambo2.jpg";
import lambo3 from "../assets/lambo3.jpg";
import lambo4 from "../assets/lambo4.jpg";
import lambo5 from "../assets/lambo5.jpg";
import FeaturesButton from "./FeaturesButton";

function FeaturesSection() {
  return (
    <div className="flex flex-col gap-5 h-350 w-full items-center mt-10">
      <FeaturesHeading />

      <div className="flex flex-row justify-center rounded-2xl p-4">
        <FeaturesContainer
          number="01"
          heading="Quality Choice"
          paragraph="We provide several quality car options for our clients so you don't have to compromise on quality of your chosen car."
        />

        <FeaturesContainer
          number="02"
          heading="Exclusive Service for you"
          paragraph="We are here to help you find your dream car for your daily needs."
        />

        <FeaturesContainer
          number="03"
          heading="Fast and Safe Transaction"
          paragraph="We ensure a quick and secure process for all our clients."
        />
      </div>

      <FeaturesCarsHeading />

      <div className="grid grid-cols-3 gap-5 px-30">
        <FeaturesCars images={assets} name= "Bugatti" amount= "$ 2,123,000,000" location= "Italy" />
        <FeaturesCars images={lambo1} name= "Lamborghini SVJ" amount= "$ 123,000,000" location= "Italy" />
        <FeaturesCars images={lambo2} name= "Lamborghini Urus" amount= "$ 820,000,000" location= "Italy" />
        <FeaturesCars images={lambo3} name= "Lamborghini Aventrado" amount= "$ 1,120,000,000" location= "Italy" />
        <FeaturesCars images={lambo4} name= "Bugatti" amount= "$ 400,000,000" location= "Italy" />
        <FeaturesCars images={lambo5} name= "Bugatti" amount= "$ 645,000,000" location= "Italy" />
      </div>

      <FeaturesButton />
    </div>
  );
}

export default FeaturesSection;