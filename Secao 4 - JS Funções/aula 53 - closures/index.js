function retornaFuncao(nome){
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('João');
console.dir(funcao());