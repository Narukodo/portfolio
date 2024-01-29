import React from "react";
import { createRoot } from "react-dom/client";
import Header from "components/Header";
require("./styles/tailwind.css");
require("./styles/index.css");

const App: React.FC = () => {
  return <Header />;
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
