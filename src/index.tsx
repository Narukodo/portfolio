import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Navbar from "components/Navbar";

const App: React.FC = () => {
  return <Navbar />;
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
