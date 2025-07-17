import React from "react";
import { Switch } from "react-router-dom";
// import { toast } from "react-toastify";

import MyRoute from "./MyRoute";
import Login from '../pages/Login';
import Pagina404 from '../pages/Pagina404';

export default function Routes(){
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} isClosed={false} />
      <MyRoute path="*" component={Pagina404} />
    </Switch>
  );
};