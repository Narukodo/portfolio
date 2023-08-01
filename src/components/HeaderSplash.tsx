import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import { motion } from "framer-motion";

type HeaderProps = {
  isHomePage?: boolean;
  isShort?: boolean;
};

export const Header = (props: HeaderProps) => {
  const location = useLocation();
  return (
    <motion.div
      className="header"
      initial={{
        height:
          props.isHomePage || !location.state?.fromHomepage ? "28vh" : "100vh",
      }}
      animate={{ height: props.isHomePage ? "100vh" : "28vh" }}
      transition={{ duration: 0.7, ease: [0.46, 0, 0.36, 1.02] }}
    >
      <motion.img
        src={require("../resources/background.png")}
        className={`testimg`}
        initial={{
          transform: `translateY(${
            props.isHomePage || !location.state?.fromHomepage ? "-25%" : 0
          })`,
        }}
        animate={{ transform: `translateY(${props.isHomePage ? 0 : "-25%"})` }}
        transition={{ duration: 0.7, ease: [0.46, 0, 0.36, 1.02] }}
      />
      {/** positioning is nitpicky, so using img instead of background property */}
      <div className="overlay" />
      <div className="nav">
        <Link to="/">
          <h1 className="title">ISUKOUHAI</h1>
        </Link>
        <div className="links">
          <Link
            to="/portfolio"
            state={{ fromHomepage: location.pathname === "/" }}
          >
            portfolio
          </Link>
          <Link to="/">shop</Link>
          <Link to="/about" state={{ fromHomepage: location.pathname === "/" }}>
            about
          </Link>
          <Link to="/">commissions</Link>
        </div>
      </div>
    </motion.div>
  );
};
