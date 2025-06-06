import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaractes = document.querySelector('.qtd-caracteres');
const addMaiusculas = document.querySelector('.add-maiusculas');
const addMinusculas = document.querySelector('.add-minusculas');
const addNumeros = document.querySelector('.add-numeros');
const addSimbolos = document.querySelector('.add-simbolos');
const btnGerarSenha = document.querySelector('.gerar-senha');

export default () => {
    btnGerarSenha.addEventListener('click', () =>{
        senhaGerada.innerHTML = gera();
    });
};

function gera(){
    const senha = geraSenha(qtdCaractes.value,addMaiusculas.checked,
                            addMinusculas.checked, addNumeros.checked,
                            addSimbolos.checked);

    return senha || 'Nada selecionado';
}