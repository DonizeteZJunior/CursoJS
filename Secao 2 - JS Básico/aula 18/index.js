// Function Factory
// function criaPessoa (nome, sobrenome, idade){
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz','Otávio',25);
// const pessoa2 = criaPessoa('Maria','Larissa',55);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`Olá eu sou ${this.nome} e tenho ${this.idade} anos`);
    },

    incrementaIdade(){
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();