import React from "react";
import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="pb-10 bg-black">
      <div className="grid grid-cols-2 md:grid-cols-4 pb-4 mt-6 ">
        <div className="md:px-10 lg:px-20">
          <div className="pt-6">
            <p className="text-xs">
              Vaishnavi Tech Part, 3rd $ 4th Floor, <br /> Sarajpur Main
              Road,Bellandur <br /> Bengaluru - 560103
            </p>
            <p className="text-xs text-blue-600 py-1">Contact Us</p>
            <div className="flex gap-1 ">
              {" "}
              <CiFacebook />
              <CiTwitter />
              <CiYoutube />
              <CiInstagram />
              <CiLinkedin />
              <TbBrandTelegram />
            </div>
          </div>
        </div>

        <div className="pt-6 ">
          <h2 className="text-gray-700 font-semibold">Products</h2>
          {["Stocks", "Futures $ Options", "IPO", "Mutual Funds", "NFO"].map(
            (items) => (
              <p className="text-xs py-1">{items}</p>
            )
          )}
        </div>
        <div className="pt-6 ">
          <h2 className="text-gray-700 font-semibold">TradePro</h2>
          {[
            "About Us",
            "Pricing",
            "Blog",
            "Media $ Press",
            "Careers",
            "Help and Support",
            "Trust and Safety",
          ].map((items) => (
            <p className="text-xs py-1">{items}</p>
          ))}
        </div>
        <div className="pt-6 ">
          <h2 className="text-gray-700 font-semibold">Ouick Links</h2>
          {[
            "AMC Mutual Funds",
            "Calculators",
            "Glossary",
            "Open Demat Account",
            "TradePro Digest",
            "Sitemap",
            "Income Tax Calculator",
          ].map((items) => (
            <p className="text-xs py-1">{items}</p>
          ))}
        </div>
      </div>
      <hr className="md:mx-10 lg:mx-20 bg-white" />
    </div>
  );
};

export default Footer;
