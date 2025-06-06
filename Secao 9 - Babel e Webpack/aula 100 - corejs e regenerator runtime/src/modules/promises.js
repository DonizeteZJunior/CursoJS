function promesa(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Sou a promesa que você me prometeu.');
            resolve();
        }, 2000);
    });
}

export default async function() {
    await promesa();
    console.log('Terminou');
}