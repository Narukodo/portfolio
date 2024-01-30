import React from "react";
import Header from "components/Header";
import { Outlet, useLocation } from "react-router-dom";

const PageLayout = () => {
  const location = useLocation();
  return (
    <>
      <Header currentPage={location.pathname} />
      <div className="px-10 py-10">
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
