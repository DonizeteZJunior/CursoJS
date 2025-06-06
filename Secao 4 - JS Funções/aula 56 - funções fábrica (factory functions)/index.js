// Factory function (função fábrica)
// Constructor factory (função construtora)
function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        // Geter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8,80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);