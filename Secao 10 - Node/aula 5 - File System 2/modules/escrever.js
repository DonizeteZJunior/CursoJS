const fs  = require('fs').promises;

// Escrevendo no arquivo
module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag:'w', encoding: 'utf8'});
}
// Flag 'w' faz apagar conteúdo do arquivo e escrever, flag 'a' acrescenta no final