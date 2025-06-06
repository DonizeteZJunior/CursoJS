require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Começa a conexão com o banco de dados e 
// emite algo no app quando a conexão finalizar com sucesso
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

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

app.on('pronto', () => {
    app.listen(3000, () =>{
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});