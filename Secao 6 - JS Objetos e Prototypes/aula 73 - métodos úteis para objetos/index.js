/*
Object.values
Object.entries
Object.assign(des,any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: 1.8};
// const outraCoisa = {
//     ...produto,
//     material: 'porcelana'
// }; // Copiar objeto sem indejar duas variaveis ao mesmo local de memoria
// const caneca = Object.assign({},produto, {material: 'porcelana'}); // Copiar objeto sem indejar duas variaveis ao mesmo local de memoria
// const caneca = { nome:produto.nome, preco: produto.preco }; // Copiar objeto sem indejar duas variaveis ao mesmo local de memoria
// Object.freeze(produto);
// console.log(caneca);
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Mostra uma descrição das Propriedades dos componentes do objeto
console.log(Object.keys(produto));