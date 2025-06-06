const nome = prompt('Digite o seu nome completo:');

document.body.innerHTML = `<b>O seu nome é:</b> ${nome} <br />`;
document.body.innerHTML += `<b>O seu nome tem</b> ${nome.length} <b>letras</b> <br />`;
document.body.innerHTML += `<b>A segunda letra do seu nome é:</b> ${nome[1]}  <br />`;
document.body.innerHTML += `<b>Qual o primeiro índice da letra 'a' no seu nome?</b> ${nome.indexOf('a')} <br />`;
document.body.innerHTML += `<b>Qual o último índice da letra 'a' no seu nome?</b> ${nome.lastIndexOf('a')} <br /> `;
document.body.innerHTML += `<b>As últimas 3 letras do seu nome são:</b> ${nome.slice(-3, nome.length)} <br />`;
document.body.innerHTML += `<b>As palavras do seu nome são:</b> ${nome.split(' ')} <br />`;
document.body.innerHTML += `<b>Seu nome com letras maiúsculas:</b> ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `<b>Seu nome com letras minúsculas:</b> ${nome.toLowerCase()} <br />`;