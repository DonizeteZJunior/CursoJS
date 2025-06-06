const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

function listarElementos(){
    const container = document.querySelector('.container');
    const div = document.createElement('div');  

    for (let i = 0; i < elementos.length; i++){
        const {tag, texto} = elementos[i];
        const elemento = criarElemento(tag, texto);
        div.appendChild(elemento);
    }

    container.appendChild(div);
}

function criarElemento(tag, texto){
    const elemento = document.createElement(tag);
    elemento.innerText = texto;

    return elemento;
}

listarElementos();