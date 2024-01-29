import React from "react";
import { useRouteError } from "react-router-dom";

// Return to homepage after acknowledgement
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return <div>Error page</div>;
};

export default ErrorPage;
