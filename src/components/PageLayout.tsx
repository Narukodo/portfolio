import React from "react";
import { Header } from "./HeaderSplash";

export const PageLayout = ({
  isHomePage,
  children,
}: {
  isHomePage?: boolean;
  children?: React.ReactNode;
}) => (
  <>
    <Header isHomePage={isHomePage || false} />
    {children}
  </>
);
