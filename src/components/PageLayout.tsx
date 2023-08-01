import React from "react";
import { Header } from "./HeaderSplash";

export const PageLayout = ({
  isHomePage,
  isShort,
  children,
}: {
  isHomePage?: boolean;
  isShort?: boolean;
  children?: React.ReactNode;
}) => (
  <>
    <Header isHomePage={isHomePage || false} isShort={isShort || false} />
    {children}
  </>
);
