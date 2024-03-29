import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type StyledLinkProps = {
  to: string;
};

const StyledLink: FC<PropsWithChildren<StyledLinkProps>> = ({
  to,
  children,
}) => {
  return (
    <Link
      to={to}
      className="relative after:transition-all after:opacity-0 after:h-0.5 after:left-0 after:w-0 after:absolute after:bottom-0 after:bg-white after:content-[''] hover:after:w-full hover:after:opacity-100"
    >
      {children}
    </Link>
  );
};

export default StyledLink;
