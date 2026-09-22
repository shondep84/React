function Hero() {
  return (
    <div className="absolute px-30 py-15 w-[80%] text-white text-xl font-bold">
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">
        Experience the full potential of transportation
      </h1>

      <p className="mt-5 text-lg text-gray-200 max-w-xl">
        Owning a Lamborghini is about confidence. Transport mode guarantees it. A journey wrapped in precision, privacy, and protection, so your car arrives as immaculate as the day it left Italy.
      </p>
      
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:opacity-70 shadow-md cursor-pointer">
        Pre-Order Now
      </button>
    </div>
  );
}

export default Hero;