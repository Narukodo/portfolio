import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { motion } from "framer-motion";

type HeaderProps = {
  isHomePage?: boolean;
};

export const Header = (props: HeaderProps) => (
  <motion.div
    className="header"
    animate={{ height: props.isHomePage ? "100vh" : "28vh" }}
    transition={{ duration: 0.7, ease: [0.46, 0, 0.36, 1.02] }}
  >
    <motion.img
      src={require("../resources/background.png")}
      className={`testimg`}
      animate={{ transform: `translateY(${props.isHomePage ? 0 : "-25%"})` }}
      transition={{ duration: 0.7, ease: [0.46, 0, 0.36, 1.02] }}
    />
    {/** positioning is nitpicky, so using img instead of background property */}
    <div className="overlay" />
    <div className="nav">
      <h1 className="title">ISUKOUHAI</h1>
      <div className="links">
        <Link to="/portfolio">portfolio</Link>
        <Link to="/">shop</Link>
        <Link to="/">about</Link>
        <Link to="/">commissions</Link>
      </div>
    </div>
  </motion.div>
);
