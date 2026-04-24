import React from "react";

const Footer = () => {
  return (
    <footer className=" py-8 bg-white">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
          <p className="font-semibold">Evenza</p>
        </div>

        <p className="text-gray-600">© 2024 Evenza. All rights reserved.</p>

        <div className="flex gap-6 text-black">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
