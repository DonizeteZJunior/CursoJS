import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useSelector, useDispatch } from 'react-redux';

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import Loading from "../../components/Loading";
import * as actions from '../../store/modules/auth/actions';

export default function Registro(){
  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored =  useSelector(state => state.auth.user.email);
  const isLoading = useSelector(state => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  },[]);

  async function handleSubmit(e){
    e.preventDefault();
    let formErros = false;

    if(nome.length < 3 || nome.length > 255){
      formErros = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres.');
    }

    if(!isEmail(email)){
      formErros = true;
      toast.error('Email inválido.');
    }

    if(!id && (password.length < 6 || password.length > 50)){
      formErros = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres.');
    }

    if(formErros) return;

    dispatch(actions.registerRequest({ nome, email, password, id}));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input type="text" id="nome" value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Seu nome" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Seu email" />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" id="password" value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Sua senha" />
        </label>

        <button type="submit">{id? 'Salvar' : 'Criar minha conta'}</button>
      </Form>
    </Container>
  );
}