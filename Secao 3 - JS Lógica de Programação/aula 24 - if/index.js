/*
Entre 0 - 11 => Bom dia
Entre 12 - 17 => Boa tarde
Entre 18 - 23 => Boa Noite
*/

// If pode ser usado sozinho
// Else não pode ser usado sem um If
// Pode se ter quantos else ifs na checagem
// Só posso ter um else na checagem
// Posso checar condições sem um If

const hora = 44;

if (hora >= 0  && hora <= 11) {
    console.log('Bom dia!');
} else if(hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá');
}