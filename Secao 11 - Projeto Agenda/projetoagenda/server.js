require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Começa a conexão com o banco de dados e 
// emite algo no app quando a conexão finalizar com sucesso
mongoose.connect(process.env.CONNECTIONSTRING,)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));
const session = require('express-session');
// Auxilia a salvar a Session no MongoDB para evitar sobrecarregar a mâquina
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const {middlewareGlobal,checkCsrfError,csrfMiddleware} = require('./src/middlewares/middleware');

app.use(helmet(
    {
        referrerPolicy: false,
    }
));

// Ajusta o enconde da url pra aceitar parametros
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Adiciona conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')));

// Configurando a session com o MongoStore aonde as mesmas vão ficar salvas por 7 dias
const sessionOptions = session({
    secret: 'australopiteco',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 Dias em milesimos de segundo,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

// Configura o rendenizador das views
app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Meu proprio Middleware
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

// Configura as rotas
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () =>{
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});