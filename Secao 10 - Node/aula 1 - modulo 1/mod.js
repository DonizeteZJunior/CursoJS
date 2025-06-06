// const nome = 'Luiz';
// const sobrenome = 'Miranda';

// const falaNome = () => nome + ' ' + sobrenome;

// // Exportando modulos

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// // exports.NOME = nome;
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'To exportando qualquer coisa';

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

const nome = 'Luiz';
const sobrenome = 'Miranda';

module.exports = {
    nome, sobrenome, Pessoa
};