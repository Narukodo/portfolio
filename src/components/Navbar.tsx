import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute bottom-32 right-32 text-right">
      <h1 className="text-white text-7xl">ISUKOUHAI</h1>
      <div className="flex text-white text-4xl">
        <Link to="/portfolio">portfolio</Link> commissions about store
      </div>
    </div>
  );
};

export default Navbar;
