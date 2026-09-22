function AboutCard({heading, paragraph}) {
  return (
    <div className="flex flex-col gap-3 h-40 w-70 bg-gray-300 rounded-2xl p-4 shadow-olive-300">
      <h1 className="text-6xl font-bold font-serif pb-2">{heading}</h1>
      <p>{paragraph}</p>
    </div>
  );
}

export default AboutCard;