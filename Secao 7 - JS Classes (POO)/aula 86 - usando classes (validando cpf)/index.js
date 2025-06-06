class ValidaCPF{
    constructor(cpfEnviado){
        this.cpfEnviado = cpfEnviado.replace(/\D+/g,'');;
    }

    valida(){
        if(typeof this.cpfEnviado === 'undefined') return false;
        if(this.cpfEnviado.length !== 11) return false;
        if(ValidaCPF.isSequencia(this.cpfEnviado)) return false;

        const cpfParcial = this.cpfEnviado.slice(0,-2);
        const digito1 = ValidaCPF.criaDigito(cpfParcial);
        const digito2 = ValidaCPF.criaDigito(cpfParcial+digito1);

        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfEnviado;
    }
    
    static criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial);

        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((acumulador, valor) =>{
            acumulador += (regressivo * Number(valor));
            regressivo--;
            return acumulador;
        },0);
        
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    static isSequencia(cpf){
        const sequencia = cpf[0].repeat(cpf.length);
        return sequencia === cpf;
    }
}

const validaCPF = new ValidaCPF('070.987.720-03');
if(validaCPF.valida()){
    console.log('Cpf válido');
}else{
    console.log('Cpf inválido');
}