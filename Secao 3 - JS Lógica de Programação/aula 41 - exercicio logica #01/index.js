// Escreva uma função que recebe 2 números e tretorn o maior deles
function numeroMaior(numero1, numero2){
    if(numero1 !== numero2){
        return numero1 > numero2 ? numero1 : numero2;
    }else{
        console.log('Os números são iguais.');
    }
}

const maior = (x,y) => {
    return x > y ? x : y;
}

const maior2 = (x,y) => x > y ? x : y;

console.log(numeroMaior(6,4));
console.log(maior(6,3));
console.log(maior2(6,3));