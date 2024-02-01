import React, { FC } from "react";
import StyledLink from "components/StyledLink";

const Navbar: FC = () => {
  return (
    <div className="text-center md:text-right">
      <h1 className="text-white text-4xl md:text-7xl mb-1">
        <StyledLink to="/">ISUKOUHAI</StyledLink>
      </h1>

      <div className="flex text-white text-[2.3vw] justify-between w-full">
        <StyledLink to="/portfolio">portfolio</StyledLink>
        <StyledLink to="/commissions">commissions</StyledLink>
        <StyledLink to="/about">about</StyledLink>
        <StyledLink to="/store">store</StyledLink>
      </div>
    </div>
  );
};

export default Navbar;
