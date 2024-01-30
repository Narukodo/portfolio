import React, { FC } from "react";
import StyledLink from "components/StyledLink";

const Navbar: FC = () => {
  return (
    <div className="text-right">
      <h1 className="text-white text-7xl">
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
