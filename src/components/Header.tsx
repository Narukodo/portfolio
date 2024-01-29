import React from "react";
import BackgroundImage from "resources/background.png";
import Navbar from "components/Navbar";

const Header = () => {
  console.log("render");
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full absolute bg-black opacity-50" />
      <Navbar />
      <img
        src={BackgroundImage}
        className="header-background object-cover object-left"
      />
    </div>
  );
};

export default Header;
