import React from "react";
import { MenuIcon } from "@heroicons/react/solid";
import OlympiaLogo from "../assets/olympialogo.png";

function Header() {
  return (
    <div className="sticky top-0 bg-gray-200 h-24 flex justify-between">
      <div className="flex p-6 items-center">
        <MenuIcon className="h-10 text-gray-500 cursor-pointer transition duration-100 transform" />
      </div>
      <div className="flex px-6 ml-10 mr-10 items-center">
        <img
          src={OlympiaLogo}
          alt="Olympia logo"
          loading="lazy"
          className="h-24"
        />
      </div>
      <div className="flex items-center p-6 ">
        <p className="ml-10 text-lg text-gray-500 cursor-pointer">Sign in</p>
      </div>
    </div>
  );
}

export default Header;
