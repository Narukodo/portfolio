import React, { FC } from "react";
import { Link } from "react-router-dom";

type NavbarProps = {
  currentPage: string;
};

const Navbar: FC<NavbarProps> = ({ currentPage }) => {
  return (
    <div className="text-right">
      <h1 className="text-white text-7xl">
        <Link to="/">ISUKOUHAI</Link>
      </h1>
      <div className="flex text-white text-[2.5vw] justify-between w-full">
        <Link to="/portfolio">portfolio</Link>
        <Link to="/commissions">commissions</Link>
        <Link to="/about">about</Link>
        <Link to="/store">store</Link>
      </div>
    </div>
  );
};

export default Navbar;
