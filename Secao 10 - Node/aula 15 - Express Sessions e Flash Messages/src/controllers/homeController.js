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
    // requisicao.session.usuario = { nome: 'Luiz', logado: true};
    // console.log(requisicao.session.usuario);
    // requisicao.flash('info', 'Olá Mundo!');
    // requisicao.flash('error','dadadadada');
    // requisicao.flash('success','Blaaaaaaaaaaa');
    // console.log(requisicao.flash('error'), requisicao.flash('success'), requisicao.flash('info'));
    resposta.render('index');
    return;
};

exports.trataPost = (req,res,next) => {
    res.send(req.body);
}