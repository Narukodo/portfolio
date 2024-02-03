import React, { FC } from "react";
import StyledLink from "components/StyledLink";

const Navbar: FC = () => {
  return (
    <div className="text-center lg:h-auto lg:text-right">
      <h1 className="text-white text-4xl md:text-7xl mb-1">
        <StyledLink to="/">ISUKOUHAI</StyledLink>
      </h1>

      <div className="flex flex-col text-xl text-white justify-between w-full md:text-2xl lg:h-auto lg:flex-row">
        <StyledLink to="/portfolio">portfolio</StyledLink>
        <StyledLink to="/commissions">commissions</StyledLink>
        <StyledLink to="/about">about</StyledLink>
        <StyledLink to="/store">store</StyledLink>
      </div>
    </div>
  );
};

export default Navbar;
