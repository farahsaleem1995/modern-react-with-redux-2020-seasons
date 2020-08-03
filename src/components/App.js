import React from "react";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "../hooks/useLocation";

const App = () => {
  const [latitude, error] = useLocation();

  let content;
  if (error) {
    content = <p>Error: {error}</p>;
  } else if (latitude) {
    content = <SeasonDisplay latitude={latitude} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div>{content}</div>;
};

export default App;
