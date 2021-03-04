import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import Introduce from "./pages/Introduce";
import Login from "./components/LoginView";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route exact path="/Intro" component={Introduce} />
      <Route exact path="/Login" component={Login} />
    </BrowserRouter>
  );
}

export default Routes;
