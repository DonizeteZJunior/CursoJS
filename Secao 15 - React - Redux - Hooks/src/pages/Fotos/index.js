import React, { useEffect, useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import * as actions from '../../store/modules/auth/actions';

import axios from "../../services/axios";
import historico from "../../services/historico";
import { get } from "lodash";
import { toast } from "react-toastify";

export default function Fotos({ match }){
  const id = get(match, 'params.id', '');
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    const getData = async() => {
      try {
        setIsLoading(true);
        const {data} = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Fotos[0].url', ''));
      } catch {
        toast.error('Erro ao obter imagem');
        historico.push('/');
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [id]);

  const handleChange = async e => {
    const foto = e.target.files[0];
    const fotoURL = URL.createObjectURL(foto);

    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', foto);

    try {
      setIsLoading(true);

      await axios.post('/fotos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      toast.success('Foto enviada com sucesso.');
    } catch (error) {
      const { status } = get(error, 'response', '');
      toast.error('Erro ao enviar foto.');

      if(status === 401) dispatch(actions.loginFailure());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Foto" crossOrigin="" /> : 'Selecionar'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};