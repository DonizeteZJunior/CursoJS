function calculoIMC(){
    // Seleciono o form aonde serão colocados os dados
    const formIMC = document.getElementById('form-imc');
    const resultado = document.getElementById('div-resultado');

    function receberDadosFormCalcular(evento){
        evento.preventDefault();
        // Seleciono os inputs da onde iremos pegar os dados
        const inputPeso = formIMC.querySelector('#input-peso');
        const inputAltura = formIMC.querySelector('#input-altura');

        // Convertendo os valores dos inputs para garantir que sejam númericos
        const peso = Number.parseFloat(inputPeso.value);
        const altura = Number.parseFloat(inputAltura.value);
        
        // Checando se a conversão deu certo, para evitar erros
        if(Number.isNaN(peso)){
            return resultado.innerHTML = `<p class="vermelho">Valor do peso é inválido.</p>`;
        } else if (Number.isNaN(altura)){
            return resultado.innerHTML = `<p class="vermelho">Valor do altura é inválido.</p>`;
        }

        // Realizando o calculo
        const resultadoCalculoIMC = peso /(altura * altura);
        
        // Checando qual o resultado do calculo, para garantir 
        if(resultadoCalculoIMC < 18.5){
            return resultado.innerHTML = `<p class="amarelo">Você está abaixo do peso.</p>`;
        }else if(resultadoCalculoIMC >= 18.5 && resultadoCalculoIMC <= 24.9){
            return resultado.innerHTML = `<p class="verde">Você está com o peso normal.</p>`;
        }else if(resultadoCalculoIMC >= 25 && resultadoCalculoIMC <= 29.9){
            return resultado.innerHTML = `<p class="amarelo">Você está com sobrepeso.</p>`;
        }else if(resultadoCalculoIMC >= 30 && resultadoCalculoIMC <= 34.9){
            return resultado.innerHTML = `<p class="vermelho">Você está com obesidade grau 1.</p>`;
        }else if(resultadoCalculoIMC >= 35 && resultadoCalculoIMC <= 39.9){
            return resultado.innerHTML = `<p class="vermelho">Você está com obesidade grau 2.</p>`;
        }else if(resultadoCalculoIMC >= 40){
            return resultado.innerHTML = `<p class="vermelho">Você está com obesidade grau 3.</p>`;
        }
    }

    // Registro no evento submit do form a função para calcular o IMC e mostrar o resultado
    formIMC.addEventListener('submit', receberDadosFormCalcular);
}

calculoIMC();