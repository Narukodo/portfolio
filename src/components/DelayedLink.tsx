import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default ({
  to,
  children,
  ...rest
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <Link
      to={to}
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        setTimeout(() => {
          navigate(to);
        }, 700);
      }}
    >
      {children}
    </Link>
  );
};
