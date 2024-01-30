import React from "react";
import { useRouteError } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import BackgroundImage from "resources/background.png";
import StyledLink from "components/StyledLink";

// Return to homepage after acknowledgement
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      className="relative w-full
    h-screen flex justify-center items-center"
    >
      <img
        src={BackgroundImage}
        className="header-background absolute object-cover object-left"
      />
      <div className="h-full w-full absolute bg-overlay opacity-75" />
      <div className="absolute text-white text-center">
        <h1 className="text-8xl">OOPS!</h1>
        <p className="text-2xl">The page you're looking for doesn't exist.</p>
        <div className="flex w-[23%] justify-between items-center my-10">
          <FaArrowLeftLong />
          <StyledLink to="/">
            <p className="text-xl">Go back</p>
          </StyledLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
