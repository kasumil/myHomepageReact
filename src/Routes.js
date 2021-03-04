import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import Introduce from "./pages/Introduce";
import Login from "./containers/LoginForm";
import Register from './containers/RegisterForm';
import Photo from './pages/Photo'

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route exact path="/intro" component={Introduce} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/photo" component={Photo} />
    </BrowserRouter>
  );
}

export default Routes;
