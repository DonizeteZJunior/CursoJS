// argumentos que sustenta todos os argumentos enviados
// function funcao(a,b,c){
//     let total = 0;

//     for(let argumento of arguments){
//         total += argumento;
//     }

//     console.log(total);
// }
// funcao(1,2,3,4,5,6,7);

// function funcao(a,b,c,d,e,f){
//     console.log(a,b,c,d,e,f);
// }
// funcao(1,2,3);

// function funcao(a,b=2,c=4){
//     console.log(a+b+c);
// }
// funcao(2,undefined,20);

//atribuição via desestruturação
// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// }
// let obj = {nome: 'Luiz',sobrenome: 'Otávio', idade:20};
// funcao(obj);

// desestruturação de array
// function funcao([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3);
// }

// funcao(['Luiz Otávio','Miranda',30]);

const conta = function(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};

conta('+', 1,20,30,40,50);