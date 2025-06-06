const frutas = ['Pera','Maçã','Uva'];

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// For in -> lê os índices ou chaves do objeto

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}