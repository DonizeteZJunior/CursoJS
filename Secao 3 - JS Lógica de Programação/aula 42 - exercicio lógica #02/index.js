/* 
   Escreva uma função chamada ePaissagem que
   recebe dois argumentos, largura e altura
   de uma imagem (number).
   Retorne true se a imagem estiver no modo
   paisagem.
*/
const ePaisagem = (altura,largura) => altura < largura;

console.log(ePaisagem(190, 200));