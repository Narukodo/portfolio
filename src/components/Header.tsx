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
        currentPage == "/" ? "h-screen" : "h-1/5 md:h-[28%]"
      } overflow-hidden flex items-center justify-center md:block`}
    >
      <img
        src={BackgroundImage}
        className={`header-background absolute object-cover object-left ${
          currentPage !== "/" && "top-[-100%]"
        }`}
      />
      <div className="h-full w-full absolute bg-overlay opacity-75" />
      <div
        className={`lg:w-[38%] w-1/2 absolute ${
          currentPage === "/"
            ? "md:bottom-32 md:right-32"
            : "md:bottom-8 md:right-24"
        }`}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
