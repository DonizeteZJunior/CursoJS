import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { get } from "lodash";

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import axios from '../../services/axios';
import historico from '../../services/historico';

export default function Registro(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    if(password.length < 6 || password.length > 50){
      formErros = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres.');
    }

    if(formErros) return;

    try{
      await axios.post('/users/', {nome, password, email});
      toast.success('Você fez o seu cadastro');
      historico.push('/login/');
    } catch(e) {
      const errors = get(e, 'response.data.errors',[]);

      errors.map(erro => toast.error(erro));
    }
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>
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

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}