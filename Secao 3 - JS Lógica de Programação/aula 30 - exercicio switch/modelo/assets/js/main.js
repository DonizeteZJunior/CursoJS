const h1 = document.querySelector("#diaHoje");

// Minha resposta
function formataData(){
    const dataHoje = new Date();
    
    const diaDaSemana = getDiaDaSemana(dataHoje.getDay());
    const diaNumero = zeroAEsquerda(dataHoje.getDate());
    const mesDoAno = getMesDoAno(dataHoje.getMonth());
    const ano = zeroAEsquerda(dataHoje.getFullYear());
    const hora = zeroAEsquerda(dataHoje.getHours());
    const minutos = zeroAEsquerda(dataHoje.getMinutes());

    h1.innerHTML = `${diaDaSemana}, ${diaNumero} de ${mesDoAno} de ${ano} ${hora}:${minutos}`;
}

function getDiaDaSemana(diaDaSemana){
    // let diaPorExtenso;

    // switch(diaDaSemana){
    //     case 0:
    //         return diaPorExtenso = 'domingo';
    //     case 1:
    //         return diaPorExtenso = 'segunda-feira';
    //     case 2:
    //         return diaPorExtenso = 'terça-feira';
    //     case 3:
    //         return diaPorExtenso = 'quarta-feira';
    //     case 4:
    //         return diaPorExtenso = 'quinta-feira';
    //     case 5:
    //         return diaPorExtenso = 'sexta-feira';
    //     case 6:
    //         return diaPorExtenso = 'sábado';
    // }

    const diasSemanas = ['domingo','segunda','terça','quarta',
        'quinta','sexta','sábado'];
    return diasSemanas[diaDaSemana];
}

function getMesDoAno(mesDoAno){
    // let mesPorExtenso;
    
    // switch(mesDoAno){
    //     case 0:
    //         return mesPorExtenso = 'janeiro';
    //     case 1:
    //         return mesPorExtenso = 'fevereiro';
    //     case 2:
    //         return mesPorExtenso = 'março';
    //     case 3:
    //         return mesPorExtenso = 'abril';
    //     case 4:
    //         return mesPorExtenso = 'maio';
    //     case 5:
    //         return mesPorExtenso = 'junho';
    //     case 6:
    //         return mesPorExtenso = 'julho';
    //     case 7:
    //         return mesPorExtenso = 'agosto';
    //     case 8:
    //         return mesPorExtenso = 'setembro';
    //     case 9:
    //         return mesPorExtenso = 'outubro';
    //     case 10:
    //         return mesPorExtenso = 'novembro';
    //     case 11:
    //         return mesPorExtenso = 'dezembro';
    // }
    
    const mesesAno = ['janeiro','fevereiro','março','abril',
                      'maio','junho','julho','agosto','setembro',
                      'outubro','novembro','dezembro'];
    return mesesAno[mesDoAno];
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

formataData();

// Forma curta
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };

// h1.innerHTML = data.toLocaleString('pt-BR', opcoes);