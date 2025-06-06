exports.paginaInicial = (requisicao, resposta) => {
    resposta.render('index');
    return;
};

exports.trataPost = (req,res,next) => {
    res.send(req.body);
}