import { FaArrowRight } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-10 md:px-10 lg:px-20">
      <main className="py-10">
        <p className="text-4xl text-center font-bold  font-sans">
          Trade Smarter, Not Harder
        </p>
        <p className="text-md text-center text-gray-300 font-sans">
          Access global Markets with real-time data and advanced trading tools.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-5 flex items-center gap-3 m-auto">
          Open Free Account <FaArrowRight />
        </button>
      </main>
      <div className="py-20 ">
        <div className="grid md:grid-cols-2 gap-10 items-center pb-20 overflow-hidden">
          <div className="mx-auto pl-2">
            <h2 className="text-4xl font-bold  mb-8">Advanced Trading Tools</h2>
            <ul className="space-y-6 ">
              {[
                "Real-time Market Data",
                "Advance Charting",
                "Risk Management tools",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-gray-300 text-base items-center"
                >
                  <FiBarChart2 color="#3b82f6" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group ">
            <img
              className="w-full rounded-xl "
              src="pic1.webp"
              alt="trading-images"
            />
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 " />
          </div>
        </div>

        <div
          className="grid md:grid-cols-2 gap-10
         items-center pb-20"
        >
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
            <img
              className="w-full rounded-xl"
              src="pic2.jpg"
              alt="trading-images"
            />{" "}
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
          <div className="mx-auto px-10">
            <h2 className="text-4xl font-bold  mb-8">
              Marketing Alanlysis at Your Fingertips
            </h2>
            <p className="text-base text-gray-300">
              Get in-depth market analysis and make informed trading decisions.
            </p>
            <div className="flex items-center gap-5 mt-8">
              <div>
                <FaArrowTrendUp size={30} color="#3b82f6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-500">500+</p>
                <p className="text-gray-300 text-base">
                  Global Markets for Trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
