import React, { FC } from "react";
import BackgroundImage from "resources/background.png";
import Navbar from "components/Navbar";

type HeaderProps = {
  currentPage: string;
};

const Header: FC<HeaderProps> = ({ currentPage }) => {
  return (
    <div
      className={`relative w-full ${
        currentPage == "/" ? "h-screen" : "h-[28%]"
      } overflow-hidden`}
    >
      <img
        src={BackgroundImage}
        className={`header-background absolute object-cover object-left ${
          currentPage !== "/" && "top-[-100%]"
        }`}
      />
      <div className="h-full w-full absolute bg-overlay opacity-75" />
      <div
        className={`w-2/5 absolute ${
          currentPage === "/" ? "bottom-32 right-32" : "bottom-8 right-24"
        }`}
      >
        <Navbar currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Header;
