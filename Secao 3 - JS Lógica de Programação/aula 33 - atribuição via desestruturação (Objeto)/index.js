const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// const nome = pessoa.nome;
// console.log(nome);

// const {endereco: {rua: r = 12345, numero}, endereco} = pessoa;
// console.log(r, numero, endereco);

const {nome, ...resto} = pessoa;
console.log(nome, resto);