// const request = objeto => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(objeto.method, objeto.url, true);
//         xhr.send();

//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.responseText);    
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     });
// };

document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(elemento);
    }
});

async function carregaPagina(elemento){
    try{
        const href = elemento.getAttribute('href');
        const reposta = await fetch(href);

        if(reposta.status !== 200) throw new Error('ERRO 404');

        const html = await reposta.text();
        carregaResultado(html);
    }catch (e){
        console.log(e);
    }
}

const carregaResultado = (response) => {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

fetch('pagina1 .html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.log(e));