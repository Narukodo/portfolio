import React from "react";
import Header from "components/Header";
import { Outlet, useLocation } from "react-router-dom";

const PageLayout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col h-full">
      <Header currentPage={location.pathname} />
      <div className={location.pathname === "/" ? "hidden" : "grow w-full"}>
        <div className="h-3/4 md:h-2/3 w-5/6 m-auto my-10 md:my-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
