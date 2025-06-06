const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Outra coisa qualquer',
//     descricao: 'Outra descrição.'
// }).then(dados => console.log(dados))
//   .catch(e => console.log(e));

// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (requisicao, resposta) => {
    resposta.render('index');
    return;
};

exports.trataPost = (req,res,next) => {
    res.send(req.body);
}