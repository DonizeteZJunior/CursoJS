// // Importando os modules;
// // const falaNome = require('./mod').falaNome;

// // const mod1 = require('./mod');
// // const falaNome = mod1.falaNome;

// const {nome, sobrenome, falaNome} = require('./mod');

// console.log(falaNome());
const axios = require('axios');
const { Pessoa } = require('./mod');
const mod1 = require('./mod');

const p1 = new Pessoa('Luiz');
console.log(p1);
console.log(mod1);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e))