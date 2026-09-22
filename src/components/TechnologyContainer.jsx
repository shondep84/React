function TechnologyContainer() {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-serif text-sm">
        Step into the future with our state-of-the-art technology. Enjoy seamless connectivity, intuitive controls, and smart features that enhance your driving experience. Powered by cutting-edge battery technology, our EVs deliver impressive range and performance. Whether you're navigating city streets or embarking on a road trip, rest assured that you'll reach your destination with ease.
      </p>
      <button className="bg-black text-white w-30 px-4 py-2 rounded hover:animate-bounce transition-colors duration-300 cursor-pointer italic">
        Learn More
      </button>
    </div>
  );
}

export default TechnologyContainer;
