//  705.484.450-52  070.987.720-03
/*
    7x  0x  5x  4x  8x  4x  4x  5x  0x
    10  9   8   7   6   5   4   3   2
    70  0   40  28  48  20  16  15  0 = 237

    11 - (237 % 11) = 5 (Primeiro dígito)
    Se o número digito for maior que 9, consideramos 0.

    7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
    11  10  9   8   7   6   5   4   3   2
    77  0   45  32  56  24  20  20  0   10 = 284

    11 - (284 % 11) = 5 (Primeiro dígito)
    Se o número digito for maior que 9, consideramos 0.
*/

function validaCpf(cpf){
    let cpfLimpo = cpf.replace(/\D+/g, ''); // Expressão regular que limpa tudo que não for um número
    
    if(typeof cpfLimpo === 'undefined') return false;
    if(cpfLimpo.length !== 11) return false;
    if(isSequencia(cpfLimpo)) return false;

    let cpfArray = Array.from(cpfLimpo);
    cpfArray = cpfArray.slice(0,-2);

    const primeiroDigito = calculoDigito(cpfArray);
    cpfArray.push(String(primeiroDigito));
    const segundoDigito = calculoDigito(cpfArray);
    cpfArray.push(String(segundoDigito));

    let cpfAValidar = cpfArray.join('');
    
    if(cpfAValidar === cpfLimpo){
        return console.log('CPF valido.');
    }

    return console.log('CPF não valido.');
}

const calculoDigito = (cpf) => {
    let somatorio = cpf.reduce((acumulador,valor, index, array) => {
        return acumulador + (Number(valor) * ((array.length - index) + 1));
    }, 0);   
    let digito = 11 - (somatorio % 11);
    if (digito > 9) return 0;
    return digito;
};

const isSequencia = (cpf) => {
    const sequencia = cpf[0].repeat(cpf.length);
    return sequencia === cpf;
};

validaCpf('111.111.111-11');