import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-gray-800 to-blue-800 md:px-10 px-5">
      <div className="h-18 items-center flex justify-between">
        <div className="text-3xl text-white font-bold px-4">Farouq</div>

        {/* Desktop Menu */}
        <div className="hidden sm:block">
          <a href="#Home" className="text-gray-100 text-lg px-4">Home</a>
          <a href="#About" className="text-gray-100 text-lg px-4">About</a>
          <a href="#Skills" className="text-gray-100 text-lg px-4">Skills</a>
          <a href="#Projects" className="text-gray-100 text-lg px-4">Projects</a>
          <a href="#Contact" className="text-gray-100 text-lg px-4">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="block sm:hidden px-4 text-3xl text-white cursor-pointer"
        >
          <CiMenuBurger />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-gray-200 transform transition-transform duration-300 ease-in-out sm:hidden 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-3xl text-gray-700 cursor-pointer"
        >
          <RxCross1 />
        </button>

        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#Home" onClick={() => setIsOpen(false)} className="text-gray-600 text-2xl">Home</a>
          <a href="#About" onClick={() => setIsOpen(false)} className="text-gray-600 text-2xl">About</a>
          <a href="#Skills" onClick={() => setIsOpen(false)} className="text-gray-600 text-2xl">Skills</a>
          <a href="#Projects" onClick={() => setIsOpen(false)} className="text-gray-600 text-2xl">Projects</a>
          <a href="#Contact" onClick={() => setIsOpen(false)} className="text-gray-600 text-2xl">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
