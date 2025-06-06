const express = require('express');
const app = express();

// /profiles/12345?
// campanha=googleads & 
// nome_campanha=seila

app.use(express.urlencoded({extended: true}));

app.get('/', (requisicao, resposta) => {
    resposta.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome" >
            Outro campo: <input type="text" name="aquioutrocampo" >
            <button>Enviar formulário </button>
        </form>    
    `);
});

// Parametro opicional
app.get('/testes/:idUsuarios?/:parametro?', (req,res) => {
    // /profile/3
    // /profiles/?chave1=valor1&chave2=valor2
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

app.post('/', (req,res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome} \n
              Aqui outro campo: ${req.body.aquioutrocampo}`);
});

app.get('/contato', (req,res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});