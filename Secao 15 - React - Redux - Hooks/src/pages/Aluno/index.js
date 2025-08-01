import React, { useEffect, useState } from "react";
import { get } from "lodash";
import { isEmail, isInt, isFloat } from "validator";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FaEdit, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import axios from "../../services/axios";
import historico from "../../services/historico";
import Loading from '../../components/Loading';
import { Container } from "../../styles/GlobalStyles";
import { Form, ProfilePicture, Title } from "./styled";
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({match}){
  const id = get(match, 'params.id', '');
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!id) return;

    async function getData(){
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/alunos/${id}`);
        const  fotoLink = get(data, 'Fotos[0].url', '');

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
        setFoto(fotoLink);

        setIsLoading(false);
      } catch(err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if(status === 400){
          errors.map(error => toast.error(error));
        }
        historico.push('/');
      }
    }

    getData();
  },[id]);

  const handleSubmit = async e => {
    e.preventDefault();
    let formErrors = false;
    setIsLoading(true);

    if(nome.length < 3 || nome.length > 255){
      toast.error('Nome precisa ter entre 3 e 255 caracteres');
      formErrors = true;
    }

    if(sobrenome.length < 3 || sobrenome.length > 255){
      toast.error('Nome precisa ter entre 3 e 255 caracteres');
      formErrors = true;
    }

    if (!isEmail(email)){
      toast.error('Email inválido');
      formErrors = true;
    }

    if (!isInt(String(idade))){
      toast.error('Idade inválida');
      formErrors = true;
    }

    if(!isFloat(String(peso))){
      toast.error('Peso inválida');
      formErrors = true;
    }

    if(!isFloat(String(peso))){
      toast.error('Altura inválida');
      formErrors = true;
    }

    if(formErrors) return;

    try {
      if(id){
        // Editando
        await axios.put(`/alunos/${id}`,{
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) editado(a) com sucesso!');
      } else {
        // Criando
        const {data} = await axios.post(`/alunos/`,{
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) criado(a) com sucesso!');
        historico.push(`/aluno/${data.id}/edit`);
      }
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0){
        errors.map(error => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if(status === 401) dispatch(actions.loginFailure());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editar aluno' : 'Novo aluno'}</Title>

      {id && (
        <ProfilePicture>
          {foto ? (
            <img src={foto} alt={nome} crossOrigin="" />
          ) : (
            <FaUserCircle size={180}></FaUserCircle>
          )}
          <Link to={`/fotos/${id}`}>
            <FaEdit></FaEdit>
          </Link>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input type="text" id="nome" value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Seu nome" />
        </label>
        <label htmlFor="sobrenome">
          Sobrenome:
          <input type="text" id="sobrenome" value={sobrenome}
            onChange={e => setSobrenome(e.target.value)}
            placeholder="Seu sobrenome" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" id="email" value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Seu email" />
        </label>
        <label htmlFor="idade">
          Idade:
          <input type="number" id="idade" value={idade}
            onChange={e => setIdade(e.target.value)}
            placeholder="Seu idade" />
        </label>
        <label htmlFor="peso">
          Peso:
          <input type="text" id="peso" value={peso}
            onChange={e => setPeso(e.target.value)}
            placeholder="Seu peso" />
        </label>
        <label htmlFor="altura">
          Altura:
          <input type="text" id="altura" value={altura}
            onChange={e => setAltura(e.target.value)}
            placeholder="Seu altura" />
        </label>
        <button type="submit">
          {id?'Salvar':'Cadastrar'}
        </button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};