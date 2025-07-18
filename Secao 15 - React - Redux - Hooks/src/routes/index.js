import React from "react";
import { Switch } from "react-router-dom";
// import { toast } from "react-toastify";

import MyRoute from "./MyRoute";
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Pagina404 from '../pages/Pagina404';

export default function Routes(){
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/registro/" component={Registro} isClosed={false} />
      <MyRoute path="*" component={Pagina404} />
    </Switch>
  );
};