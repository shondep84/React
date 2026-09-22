import TechnologyHeading from "./TechnologyHeading";
import TechnologyImage from "./TechnologyImage";
import TechnologyCommitment from "./TechnologyCommitment";
import TechnologyCommitmentImage from "./TechnologyCommitmentImage";

function TechnologySection() {
  return (
    <div className="gap-5 items-center px-30 py-20">
      <TechnologyHeading />
      <TechnologyImage />

      <div className="flex gap-5 py-20 items-center">
        <TechnologyCommitment />
        <TechnologyCommitmentImage />
      </div>
    </div>
  );
}

export default TechnologySection;
