import TechnologyRevolution from "./TechnologyRevolution";
import TechnologyContainer from "./TechnologyContainer";

function TechnologyHeading() {
  return (
    <div className="flex gap-5 w-full items-center">
      <TechnologyRevolution />
      <TechnologyContainer />
    </div>
  );
}

export default TechnologyHeading;
