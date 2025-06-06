function Produto(nome, preco,estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        // value: estoque, // define o valor da chave
        // writable: true, // indica se a mesma pode ser alterado o valor
        configurable: true, // pode reconfigurar a chave
        get: () => {
            return estoquePrivado;
        },
        set: (valor) => {
            if( typeof valor !== 'number'){
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    }
}

// const p1 = new Produto('Camiseta', 20,3);
// p1.estoque = 'O valor que eu quero';
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);