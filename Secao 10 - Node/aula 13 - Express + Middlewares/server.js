const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middleware');

// Ajusta o enconde da url pra aceitar parametros
app.use(express.urlencoded({extended: true}));

// Adiciona conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')));

// Configura o rendenizador das views
app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');

// Meu proprio Middleware
app.use(middlewareGlobal);

// Configura as rotas
app.use(routes);

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});