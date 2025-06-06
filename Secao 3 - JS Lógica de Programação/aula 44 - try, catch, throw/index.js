function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números.'); // Captura e lança erros
    }

    return x+y;
}

try {
    console.log(soma(1,'2'));
} catch (error) {
    console.log(error);
}