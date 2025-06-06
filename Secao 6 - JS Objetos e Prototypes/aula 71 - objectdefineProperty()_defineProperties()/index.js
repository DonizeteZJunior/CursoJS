// defineProperty - defineProperties
function Produto(nome, preco,estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // define o valor da chave
        writable: false, // indica se a mesma pode ser alterado o valor
        configurable: false // pode reconfigurar a chave
    });

    Object.defineProperties(this, {
        nome:{
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco:{
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });
}

const p1 = new Produto('Camiseta', 20,3);
console.log(p1);
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave);
}