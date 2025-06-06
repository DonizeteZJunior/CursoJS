/*
    Aritméticos
    + Adição / Concatenação
    - Subtração
    * Multiplicação
    / Divisão
    ** Potenciação
    % Resto da divisão
*/
const num1 = 5;
const num2 = 2;
const num3 = 10;
/* 
    Precedência operadores: 
    () 
    ** 
    * / % 
    + - 
*/
console.log(num1 + num2 * num3);
/*
    Incremento => ++
    Decremento => --
*/
let contador = 10;
console.log(--contador);

/*
    Operadores de atribuição
    +=
    -=
    /=
    *=
    %=
    **=
*/
let contador1 = 2;
contador1 /= 2;

// NaN - Not a number
/*
    Conversões
    
    parseInt('5');
    parseFloat('5.2'); 
    Number('5.2');
*/
const num4 = 10;
const num5 =  Number('5.2');
console.log(num4 + num5);