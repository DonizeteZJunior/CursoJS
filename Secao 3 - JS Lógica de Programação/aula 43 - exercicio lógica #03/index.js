/* Escreva uma função que recebe um número e 
   retorne o seguinte:
   Número é divisivel por 3 = Fizz
   Número é divisivel por 5 = Buzz
   Número é divisivel por 3 e 5 = Retorna FizzBuzz
   Número NÃO é divisível por 3 e 5 = Retorna o próprio número
   Checar se o número é realmente um número = Retorna o próprio número
   Use a função com números de 0 a 100 */

const fizzBuzz = (numero) => {
    if (typeof(numero) !== 'number') return numero;
    const divisvel3 = numero % 3 === 0;
    const divisvel5 = numero % 5 === 0;

    if (divisvel3 && divisvel5){
        return 'FizzBuzz';
    } else if (divisvel3) {
        return 'Fizz';
    } else if (divisvel5) {
        return 'Buzz';
    }

    return numero;
};

function fizzBuzz2(numero){
    if(typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'));
for (let i = 0; i<= 100; i++){
    console.log(i, fizzBuzz(i));
    console.log(i, fizzBuzz2(i));
}