import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ToDoForm from "./components/public/ToDoForm";
import Calculater from "./components/public/Calculater";
import RegisterPage from "./components/public/RegisterPage";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/toDoApp">
      <ToDoForm />
    </Route>
    <Route path="/Calculater">
      <Calculater />
    </Route>
    <Route path="/RegisterPage">
      <RegisterPage />
    </Route>
  </Router>,

  document.getElementById("root")
);
