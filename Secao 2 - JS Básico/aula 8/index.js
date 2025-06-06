/*
    Luiz Otávio Miranda tem 30 anos, pesa 84 kg
    tem 1.80 de altura e seu IMC é de 25.925925925925924
    Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (alturaEmM * alturaEmM)
let anoNascimento; // ano atual - idade

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg
             tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}
             ${nome} nasceu em ${anoNascimento}`); // Template string