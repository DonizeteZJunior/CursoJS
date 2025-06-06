// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa iniciando sempre com letra maiuscula.

function Pessoa(nome, sobrenome){ 
    // Privadas
    const ID = 123456;
    const metodoInterno = () => {
        console.log(ID);
    }
    // Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodo();