import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import * as actions from "../../store/modules/auth/actions";
import Loading from "../../components/Loading";

export default function Login(props){
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector(state => state.auth.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    let formErros = false;

    if(!isEmail(email)){
      formErros = true;
      toast.error('Email inválido.');
    }

    if(password.length < 6 || password.length > 50){
      formErros = true;
      toast.error('Senha inválida.');
    }

    if(formErros) return;

    dispatch(actions.loginRequest({email,password, prevPath}));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input type="email" value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Seu email" />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Sua senha" />
        </label>
        <button type="submit">
          Acessar
        </button>
      </Form>
    </Container>
  );
}