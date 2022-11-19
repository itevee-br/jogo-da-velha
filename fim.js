const perdedor = localStorage.getItem('JogadorVelha1');
const ganhador = localStorage.getItem('JogadorVelha2');
const frase = document.querySelector(".frase");
const frase2 = document.querySelector(".frase2");
const continua = document.querySelector("#continua");
const reset = document.querySelector("#reset");

frase.innerHTML = `parabéns ${ganhador}!!!`;
frase2.innerHTML = `revanche de ${perdedor}`;

function continuaJogo(){
    window.location = 'jogo.html';
}
function trueReset(){
    window.location = 'index.html';
}

continua.addEventListener('click', continuaJogo);
reset.addEventListener('click', trueReset);