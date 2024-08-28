import React, { useState } from "react";

const Footer = () => {
  const [footerSections, setFooterSections] = useState([
    {
      title: "SHOP",
      links: ["Ladies", "Men", "Baby", "Kids", "H&M HOME", "Sport", "Magazine"],
    },
    {
      title: "CORPORATE INFO",
      links: [
        "Career at H&M",
        "About H&M group",
        "Sustainability H&M Group",
        "Press",
        "Investor relations",
        "Corporate governance",
      ],
    },
    {
      title: "HELP",
      links: [
        "Customer Service",
        "My H&M",
        "Find a store",
        "Legal & Privacy",
        "Contact",
        "Report a scam",
        "Cookie Notice",
        "Cookie Settings",
      ],
    },
  ]);

  return (
    <footer className="my-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-4 gap-8">
        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold text-md mb-4">{section.title}</h3>
            <ul>
              {section.links.map((link, i) => (
                <li key={i} className="mb-2 text-sm">
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-bold text-lg mb-4">
            Sign up now and be the first to know about exclusive offers, latest
            fashion news & style tips!
          </h3>
          <a href="#" className="text-blue-500 font-semibold flex items-center">
            Read more <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 flex justify-center space-x-4">
        <a href="#">
          <img
            src="/path/to/instagram-icon.png"
            alt="Instagram"
            className="w-6 h-6"
          />
        </a>
        <a href="#">
          <img
            src="/path/to/tiktok-icon.png"
            alt="TikTok"
            className="w-6 h-6"
          />
        </a>
        <a href="#">
          <img
            src="/path/to/youtube-icon.png"
            alt="YouTube"
            className="w-6 h-6"
          />
        </a>
        <a href="#">
          <img
            src="/path/to/pinterest-icon.png"
            alt="Pinterest"
            className="w-6 h-6"
          />
        </a>
        <a href="#">
          <img
            src="/path/to/facebook-icon.png"
            alt="Facebook"
            className="w-6 h-6"
          />
        </a>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 text-center text-xs text-gray-500">
        The content of this site is copyright-protected and is the property of H
        & M Hennes & Mauritz AB.
      </div>
    </footer>
  );
};

export default Footer;
