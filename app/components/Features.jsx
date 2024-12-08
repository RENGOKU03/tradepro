import React from "react";

const Features = () => {
  const features = [
    [
      "globe",
      "Global Markets",
      "Access global markets with real-time data and advanced trading tools.",
    ],
    [
      "star",
      "Real-Time Data",
      "Stay informed with lightning fast, real-time markt data and instant trade execution.",
    ],
    [
      "shield",
      "Secure Trading",
      "Trade with confidence using our advanced encryption and multi-factor authentication security measures.",
    ],
    [
      "piechart",
      "Portfolio Analysis",
      "Gain insigts into your pertfolio performance with comprehensive analysis tools and reports.",
    ],
    [
      "alert",
      "Price Alerts",
      "Never miss trading opportunity with customizable price alerts and notifications.",
    ],
    [
      "education",
      "Trading Education",
      "Enhance your trading skills with our extensive library of educational resources and webinars.",
    ],
  ];
  return (
    <div className="md:px-10 lg:px-20">
      <h2 className="text-4xl font-bold text-center">Why Choose TradePro?</h2>
      <p className="text-md text-center text-gray-300">
        Experience the advantage of professional-grade of trading tools and
        Resources.
      </p>
      <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 items-center mt-6 px-6 md:px5 lg:px-10">
        {features.map((item) => (
          <div
            className="bg-gray-900 rounded-xl p-2 flex flex-col items-center justify-center gap-2 group relative hover:scale-105 transition-all duration-300 px-4"
            key={item}
          >
            <img src={`./${item[0]}.svg`} className="h-10" alt="" />
            <p>{item[1]}</p>
            <p className="text-center">{item[2]}</p>
            <button className="text-blue-600">Learn More</button>
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
          </div>
        ))}
      </div>
      <div className="bg-blue-600 rounded-xl py-5 mt-12">
        <h2 className="text-3xl font-bold text-center mt-10">
          Ready to Start Trading?
        </h2>
        <p className="text-md text-center">
          Join thousands of traders and start your journey to financial freedom.
        </p>
        <button className="bg-white text-blue-600 font-bold py-1 px-3 rounded mt-5 flex items-center gap-3 m-auto">
          Create Free Account
        </button>
      </div>
    </div>
  );
};

export default Features;
