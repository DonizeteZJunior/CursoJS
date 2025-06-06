const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let data;
let timer;

iniciar.addEventListener('click', () => {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaTimer();
});

pausar.addEventListener('click', () => {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', () => {
    relogio.classList.remove('pausado');
    zerarRelogio();
});

const iniciaTimer = () => {
    timer = setInterval(() => {
        data.setTime(data.getTime() + 1000);
        relogio.innerText = data.toLocaleTimeString('pt-BR', {hour12: false});
    },1000);
}

const zerarRelogio = () => {
    data = new Date('01-01-1998 00:00:00');
    relogio.innerText = data.toLocaleTimeString('pt-BR', {hour12: false});
}

zerarRelogio();