let umaString = "O rato roeu a roupa do rei de roma."

// console.log(umaString.charAt(3));

// Concatenação de string
// console.log(umaString.concat(' ', 'em', ' um', ' lindo dia.'));
// console.log(umaString + ' em um lindo dia.');
// console.log(`${umaString} em um lindo dia.`);

// Achar indíce dentro de uma string
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('r'));
console.log(umaString.lastIndexOf('r'));

// console.log(umaString.match(/[a-z]/g));
// console.log(umaString.search(/[a-z]/));
// console.log(umaString.replace(/r/g, '#'));

// console.log(umaString.length); Tamanho da string

// separação de string por índice
// console.log(umaString.slice(-5,-1));
// console.log(umaString.substring(umaString.length - 5, umaString.length - 1));

console.log(umaString.split(' ', 3));

// console.log(umaString.toUpperCase());
// console.log(umaString.toLowerCase());