import assets from "../assets/lambo-logo.png";

function NavBar() {
  return (
    <nav className="flex flex-row gap-70 justify-around items-center align-middle p-10 px-2 py-2 mt-3 text-white font-bold bg-transparent">
      <div className="flex space-x-6 text-white font-semibold">
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#features" className="hover:text-yellow-400">Features</a>
        <a href="#technology" className="hover:text-yellow-400">Technology</a>
      </div>

        <img src={assets} alt="Logo" className="h-10 w-10" />

      <a href="#learn" className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 hover:animate-bounce transition-colors duration-300 cursor-pointer italic">
        Learn More
      </a>
    </nav>
  );
}

export default NavBar;