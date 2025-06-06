class DispositivoELetronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

// const d1 = new DispositivoELetronico('Celular');
// d1.ligar();
// d1.ligar();
// d1.desligar();
// console.log(d1);

class Smartphone extends DispositivoELetronico {
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoELetronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Olha, você alterou o método ligar.');
    }

    falaOi() {
        console.log('Olá!');
    }
}

const s1 = new Smartphone('iPhone','Cinza','x27');
s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad',true);
t1.ligar();
t1.falaOi();
console.log(t1);