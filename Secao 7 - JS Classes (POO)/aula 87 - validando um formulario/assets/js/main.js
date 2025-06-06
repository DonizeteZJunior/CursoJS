class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('#formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', evento => {
            this.handleSubmit(evento);
        });
    }

    handleSubmit(evento){
        evento.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhasValidas();

        if(camposValidos && senhasValidas){
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }

    camposValidos(){
        let valido = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText.replace(':','');
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco. `);          
                valido = false;
            }

            switch(campo.id){
                case 'cpf':
                    if(!this.validaCPF(campo)) valido = false;
                    break;
                case 'usuario':
                    if(!this.validaUsuario(campo)) valido = false;
                    break;
                default:
                    valido = true;
            }
        }

        return valido;
    }

    senhasValidas(){
        let valido = true;

        const senha = this.formulario.querySelector('#senha');
        const repetirSenha = this.formulario.querySelector('#repetir-senha');

        if(senha.value !== repetirSenha.value){
            valido = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguias.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguias.');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valido = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }

        return valido;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valido = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Usuário deverá ter entre 3 e 12 caracteres.');
            valido = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Usuário precisa conter apenas letras e/ou números.');
            valido = false;
        }

        return valido;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();