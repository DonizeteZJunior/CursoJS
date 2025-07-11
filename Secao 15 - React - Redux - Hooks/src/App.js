import React from "react";
import { Router } from "react-router-dom";

import historico from './services/historico';
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
   <Router history={historico}>
      <Header />
      <Routes />
      <GlobalStyles />
   </Router>
  );
}

export default App;
