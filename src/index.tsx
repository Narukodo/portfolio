import React from "react";
import { createRoot } from "react-dom/client";
import Homepage from "pages/Homepage";
import CommissionsPage from "pages/Commissions";
import AboutPage from "pages/About";
import PortfolioPage from "pages/Portfolio";
import StorePage from "pages/Store";
import ErrorPage from "pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "styles/tailwind.css";
import "styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/commissions",
        element: <CommissionsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/store",
        element: <StorePage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
