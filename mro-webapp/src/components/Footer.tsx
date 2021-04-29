import React from "react";
import OlympiaLogo from "../assets/olympialogo1.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";

function Footer() {
  return (
    <div className="flex justify-around items-center h-48 text-gray-500">
      <div className="flex w-1/2 items-center text-center">
        <p className="pr-5 ml-auto cursor-pointer">Contacts</p>
        <span className="h-8 bg-gray-500" style={{ width: "1px" }}></span>
        <p className="pr-5 pl-5 cursor-pointer">Terms and Conditions</p>
        <span className="h-8 bg-gray-500" style={{ width: "1px" }}></span>
        <p className="pl-5 mr-auto cursor-pointer">Privacy Policy</p>
      </div>

      <div className="cursor-pointer">
        <img
          className="h-24"
          src={OlympiaLogo}
          alt="Olympia logo"
          loading="lazy"
        />
      </div>

      <div className="flex w-1/2">
        <div className="pr-5 ml-auto cursor-pointer">
          <FacebookIcon />
        </div>
        <div className="pr-5 cursor-pointer">
          <TwitterIcon />
        </div>
        <div className="pr-5 cursor-pointer">
          <InstagramIcon />
        </div>
        <div className="pr-5 cursor-pointer">
          <YouTubeIcon />
        </div>
        <div className="mr-auto cursor-pointer">
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
