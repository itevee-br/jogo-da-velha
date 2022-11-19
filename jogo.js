const currentPlayer = document.querySelector(".currentPlayer");
var nome1 = localStorage.getItem('JogadorVelha1');
var nome2 = localStorage.getItem('JogadorVelha2');

let selected;
let player = "X";

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  selected = [];

  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${nome1}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

  player = player === "X" ? "O" : "X";
  if (player==="X"){
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${nome1}`;
  } else {
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${nome2}`;
  }
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      localStorage.clear();
      if(player==="X"){
        localStorage.setItem('JogadorVelha1', nome1);
        localStorage.setItem('JogadorVelha2', nome2);
      } else {
        localStorage.setItem('JogadorVelha1', nome2);
        localStorage.setItem('JogadorVelha2', nome1);
      }
      window.location = 'fim.html';
    }
  }

  if (selected.filter((item) => item).length === 9) {
    currentPlayer.innerHTML = `---- DEU EMPATE ----`;
    setTimeout(function() {
      init();
      return;
    }, 3000)
  }
}