const request = objeto => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(objeto.method, objeto.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);    
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(elemento);
    }
});

async function carregaPagina(elemento){
    const href = elemento.getAttribute('href');
    
    const objConfig = {
        method: 'GET',
        url: href
    };

    try{
        const resposta = await request(objConfig);
        carregaResultado(resposta);
    }
    catch(e){
        console.log(e);
    }
}

const carregaResultado = (response) => {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}