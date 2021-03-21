import React from "react";
import CalculaterHeader from "./CalculaterHeader";
import CalculaterBody from "./CalculaterBody";
import Header from "./Header";

const Calculater = () => {
  return (
    <React.StrictMode>
      <Header />
      <CalculaterHeader />
      <CalculaterBody />
    </React.StrictMode>
  );
};

export default Calculater;
