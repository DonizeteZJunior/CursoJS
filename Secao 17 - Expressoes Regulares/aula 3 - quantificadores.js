const { texto, arquivos } = require('./base');

/*
    * (opcionais) 0 ou n {0,}
    + (obrigatório) 1 ou n {1,}
    ? (opcionais) 0 ou 1 {0,1}
    \ caractere de escape
    {n,m} mínimo e máximo
    {10,} no mínimo 10
    {,10} de 0 a 10
    {5,10} de 5 a 10
*/ 

// Colocado a esquerda do caractere, indica que o mesmo pode se repetir,
// dependendo do quantificador
// const regExp = /Jo+ão+/gi;

// console.log(texto);
// console.log(texto.match(regExp));

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/gi;

for (const arquivo of arquivos){
    const valido = arquivo.match(regExp2);

    // if(!valido) continue;

    console.log(arquivo, valido);
}