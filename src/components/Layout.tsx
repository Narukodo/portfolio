import React from "react";
import Header from "components/Header";
import { Outlet, useLocation } from "react-router-dom";

const PageLayout = () => {
  const location = useLocation();
  return (
    <>
      <Header currentPage={location.pathname} />
      <Outlet />
    </>
  );
};

export default PageLayout;
