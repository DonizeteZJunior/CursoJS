import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Titulo, Paragrafo } from "./styled";

export default function Login(){
  return (
    <Container>
      <Titulo>
        Login
        <small>Oie</small>
      </Titulo>
      <Paragrafo>Lorem iposum color sit demit.</Paragrafo>
    </Container>
  );
}