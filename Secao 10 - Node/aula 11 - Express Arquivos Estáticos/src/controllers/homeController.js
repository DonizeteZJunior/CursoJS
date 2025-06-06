exports.paginaInicial = (requisicao, resposta) => {
    resposta.render('index');
};

exports.trataPost = (req,res) => {
    res.send('Ei, sou sua nova rota de POST.');
}