import React from "react";
import Calculater from "./Calculater.jsx";
import LoginPage from "./LoginPage.jsx";
import RegisterPage from "./RegisterPage.jsx";
import ToDoForm from "./ToDoForm.jsx";

const Main = () => {
  return (
    <React.StrictMode>
      <div className="row">
        <div className="col-4"></div>
      </div>
      <LoginPage />
    </React.StrictMode>
  );
};

export default Main;
