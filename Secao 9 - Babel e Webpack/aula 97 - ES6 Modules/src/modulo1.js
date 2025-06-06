const nome = 'Luiz';
const sobrenome = 'Miranda';
const idade = 30;
const cpf = 'asdad';

function soma(x,y){
    return x+y;
}

// export class Pessoa {
//     constructor(nome, sobrenome){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

// export { nome as nome2, sobrenome, idade, soma };

export default (x,y) => x*y;

export {nome, sobrenome, idade, soma};