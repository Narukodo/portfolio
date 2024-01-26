import React from "react";
import BackgroundImage from "resources/background.png";

const Header = () => {
  const location = window.location.href;
  return (
    <div className="h-screen">
      <img src={BackgroundImage} className="object-contain" />
    </div>
  );
};

export default Header;
