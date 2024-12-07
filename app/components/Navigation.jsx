"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <>
      <div className="bg-gray-800 flex md:justify-around justify-between px-5 items-center text-white">
        <header className="font-sans text-blue-500 font-bold text-2xl pl-4 py-5 cursor-pointer ">
          TradePro
        </header>
        <ul className=" justify-center  gap-3 hidden md:flex">
          {["Markets", "Trading", "Analysis", "Learn"].map((item) => (
            <li
              className="text-gray-300 hover:text-blue-500 text-base transition-colors cursor-pointer"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hidden md:block">
          Start Trading
        </button>
        <div className="md:hidden">
          {isMenuOpen ? (
            <ImCancelCircle size={30} onClick={() => setIsMenuOpen(false)} />
          ) : (
            <IoMdMenu size={30} onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-10">
          <ul className="flex flex-col gap-3 pb-4">
            {["Markets", "Trading", "Analysis", "Learn"].map((item) => (
              <li
                className="text-gray-300 hover:text-blue-500 text-xs transition-colors"
                key={item}
              >
                {item}
              </li>
            ))}
            <li>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                Start Trading
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Navigation;
