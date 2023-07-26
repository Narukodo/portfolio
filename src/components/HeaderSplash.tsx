import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const Template = () => (
  <div className="header">
    <div className="nav">
      <h1 className="title">ISUKOUHAI</h1>
      <div className="links">
        <Link to="/">portfolio</Link>
        <Link to="/">shop</Link>
        <Link to="/">about</Link>
        <Link to="/">commissions</Link>
      </div>
    </div>
  </div>
);
