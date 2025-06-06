// Promise.all Promise.race Promise.resolve Promise.reject
function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){  
            setTimeout(() => {
                reject(new Error('BAD VALUE'));
            }, tempo);
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// Promise.all resolve todas e retorna o array com os resultados
const promises = [
    esperaAi('Promise 1',aleatorio(1,5)),
    esperaAi('Promise 2',aleatorio(1,5)),
    esperaAi('Promise 3',aleatorio(1,5)),
    esperaAi(1000,aleatorio(1,5)),
];

// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch((erro) => {
//         console.log(erro);
//     });

// Promise.race executa todas e devolve o valor da que executar primeiro
// Promise.race(promises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch((erro) => {
//         console.log(erro);
//     });

// Promise.resolve Promise.reject
function baixaPagina(){
    const emCache = true;

    if(emCache){
        return  Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));