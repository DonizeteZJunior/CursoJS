function listaTarefas() {
    const inputTarefa = document.querySelector('.input-tarefa');
    const btnTarefa = document.querySelector('.btn-tarefa');
    const tarefas = document.querySelector('.tarefas');

    const carregaTarefasSalvas = () => {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);
        
        for (let tarefa of listaDeTarefas){
            criaTarefa(tarefa);
        }
    };

    const criaLi = () => {
        const li = document.createElement('li');
        return li;
    };

    const criBotaoApagar = (li) => {
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class','apagar');
        botaoApagar.setAttribute('title','Apagar esta tarefa');
        li.appendChild(botaoApagar);
    };

    const salvarTarefas = () => {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaTarefas.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(listaTarefas);
        localStorage.setItem('tarefas',tarefasJSON);
    };

    const criaTarefa = (textoInput) => {
        const li = criaLi();
        li.innerText = textoInput;
        tarefas.appendChild(li);
        criBotaoApagar(li);
        limpaInput();
        salvarTarefas();
    };

    const limpaInput = () => {
        inputTarefa.value = '';
        inputTarefa.focus();
    };

    inputTarefa.addEventListener('keypress', function(e){
        // 13 é o Keycode do Enter
        if (e.keyCode === 13){
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    });

    btnTarefa.addEventListener('click', function(e){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    });

    document.addEventListener('click', function(e){
        const el = e.target;
        
        if(el.classList.contains('apagar')){
            el.parentElement.remove();
            salvarTarefas();
        }
    });

    carregaTarefasSalvas();
}

listaTarefas();