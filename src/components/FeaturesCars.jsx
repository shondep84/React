function FeaturesCars({ images, amount, location, name }) {
  return (
    <div className="h-90 bg-black">
      <div className="space-y-5">
        <img src={images} alt={name} className="h-50 w-90" />

        <div className="px-2 space-y-2 flex gap-25">
          <div className="space-y-3">
            <h2 className="text-xl text-white font-bold">{amount}</h2>
            <p className="text-sm text-white font-semibold w-40">{name}</p>
          </div>

          <div>
            <p className="text-xl text-gray-300 font-bold">{location}</p>
          </div>
        </div>

        <button className="text-center ml-2 px-30 p-2 bg-white font-bold cursor-pointer hover:opacity-95 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default FeaturesCars;