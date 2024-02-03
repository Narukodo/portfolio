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
        currentPage == "/" ? "h-screen" : "h-1/5 lg:h-[28%]"
      } overflow-hidden flex items-end lg:items-center justify-center lg:block`}
    >
      <img
        src={BackgroundImage}
        className={`header-background object-[-100px] lg:absolute object-cover lg:object-left ${
          currentPage !== "/" && "top-[-100%]"
        }`}
      />
      <div className="h-full w-full absolute bg-overlay opacity-75" />
      <div
        className={`lg:w-[38%] lg:h-auto h-3/5 w-1/2 absolute ${
          currentPage === "/"
            ? "lg:bottom-32 lg:right-32"
            : "lg:bottom-8 lg:right-24"
        }`}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
