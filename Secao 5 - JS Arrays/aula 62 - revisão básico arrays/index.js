// Valor por referência
//                 0        1       2
// const nomes = ['Eduardo','Maria','Joana','Wallace', 'Rosana'];
// // String, Objetos, Funções, Números
// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// nomes[2] = 'João';
// delete nomes[2];
// const novo = [...nomes];

// const removidoFim = novo.pop();
// const removidoInicio = novo.shift();

// novo.push('Carlos');
// novo.unshift('Beto');
// console.log(nomes.length);
// console.log(nomes);
// console.log(removidoInicio, novo, removidoFim);

// const novo = nomes.slice(0,-1);
// console.log(novo);

// Converter String em Array
// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');

const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
const nome = nomes.join(' ');
console.log(nome);