import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import store, {persistor} from "./store";
import historico from './services/historico';
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={historico}>
            <Header />
            <Routes />
            <GlobalStyles />
            <ToastContainer autoClose={3000} theme="colored" className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
