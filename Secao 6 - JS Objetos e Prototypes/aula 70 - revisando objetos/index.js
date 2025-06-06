// Objeto literal
// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };

// const chave = 'nome';
// console.log(pessoa.nome,pessoa['nome'],pessoa[chave]);
// console.log(pessoa.sobrenome,pessoa['sobrenome']);

// Objeto via construtor
// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 31;
// pessoa1.falarNome = function(){
//     return (`${this.nome} está falando seu nome.`);
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// const chave = 'nome';
// console.log(pessoa1.nome,pessoa1['nome'],pessoa1[chave]);
// console.log(pessoa1.sobrenome,pessoa1['sobrenome']);

// delete pessoa1.nome;
// console.log(pessoa1);

// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }

// Factory functions / Classes
// function criaPessoa(nome, sobrenome){
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     }
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);

// Constructor functions 
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Bloqueia as alterações de coisas dentro desse objeto
}

// {} <- this
const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'Outra coisa'; //Não permite alteração por causa do freeze
console.log(p1);