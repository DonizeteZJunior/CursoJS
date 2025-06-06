function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject(new Error('BAD VALUE'));
        }else{
            setTimeout(() => {
                resolve(msg);
            }, tempo);
        }
    });
}

// Callback
// esperaAi('Frase 1', aleatorio(1,3), function(){
//     esperaAi('Frase 2', aleatorio(1,3), function(){
//         esperaAi('Frase 3', aleatorio(1,3));
//     });
// });

esperaAi('Conexão com o BD', aleatorio(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', aleatorio(1,3));
    })  
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, aleatorio(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela.');
    }) // Then funciona com o resolve
    .catch(e => {
        console.log('ERRO:',e);
    }); // Catch com o reject

console.log('Isso aqui será exibido antes de qualquer promisse.');