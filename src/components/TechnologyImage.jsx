import assets from "../assets/technology.jpg";

function TechnologyImage() {
  return (
    <div className="py-10">
      <img src={assets} alt="Technology" className="w-full h-full object-cover rounded"/>
    </div>
  );
}

export default TechnologyImage;
