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
      } overflow-hidden flex items-end justify-center lg:items-center`}
    >
      <img
        src={BackgroundImage}
        className={`header-background portrait:object-[-100px] absolute object-cover lg:object-left ${
          currentPage !== "/" && "top-[-100%] portrait:top-[-127%]"
        }`}
      />
      <div className="h-full w-full absolute bg-overlay opacity-75" />
      <div
        className={`lg:w-[38%] lg:h-auto h-3/5 w-1/2 absolute ${
          currentPage === "/"
            ? "landscape:lg:bottom-32 landscape:lg:right-32"
            : "landscape:lg:bottom-8 landscape:lg:right-24"
        }`}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
