exports.paginaInicial = (requisicao, resposta) => {
    resposta.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome" >
            Outro campo: <input type="text" name="aquioutrocampo" >
            <button>Enviar formulário </button>
        </form>    
    `);
};

exports.trataPost = (req,res) => {
    res.send('Ei, sou sua nova rota de POST.');
}