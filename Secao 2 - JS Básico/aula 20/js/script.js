function meuEscopo () {
    const form = document.querySelector('.form'); // para selcionar pela classe é o com .form e id é #form
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<div>
                                    <p><strong>Nome:</strong> ${nome.value}</p> 
                                    <p><strong>Sobrenome:</strong> ${sobrenome.value}</p>
                                    <p><strong>Peso:</strong> ${peso.value}</p>
                                    <p><strong>Altura:</strong> ${altura.value}</p>
                                </div> </br>`;
    }
    
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();