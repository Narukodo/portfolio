import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

const App: React.FC = () => {
  return <div className="text-white">Hello, world!</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
