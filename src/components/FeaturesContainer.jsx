function FeaturesContainer({ number, heading, paragraph }) {
  return (
    <div className="items-center justify-between h-50 w-90 space-y-2 rounded-2xl p-6">
      <h2 className="text-3xl font-bold">{number}</h2>
      <h1 className="text-xl font-bold font-serif">{heading}</h1>
      <p className="h-15 text-sm text-justify">{paragraph}</p>
      <a href="#" className="font-bold">
        Learn More
      </a>
    </div>
  );
}

export default FeaturesContainer;