import validator from 'validator';

export default class Contato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');

        let error = false;

        if(!validator.isEmail(emailInput.value)){
            alert('E-mail inválido');
            error = true;
        }

        if(nomeInput.value.length < 0){
            alert('Nome é um campo obrigatório.');
            error = true;
        }

        if(emailInput.value.length < 0 && telefoneInput.value.length < 0){
            alert('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
            error = true;
        }

        if(!error) el.submit();
    }
}