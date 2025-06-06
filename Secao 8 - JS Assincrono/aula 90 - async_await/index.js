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

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', aleatorio());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', aleatorio());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', aleatorio());
        console.log(fase3);
        console.log('Terminamos na fase:',fase3);
    } catch (error) {
        console.log(error);
    }
}

executa();