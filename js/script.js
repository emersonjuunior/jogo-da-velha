// declaração de variáveis
const aiPlayer = document.getElementById("ai-player");
const twoPlayers = document.getElementById("2-players");
const refresh = document.querySelector("#refresh");
const x = document.querySelector("#x");
const o = document.querySelector("#o");
const h3 = document.querySelector("h3");
const boxes = document.querySelectorAll(".box");
const buttons = document.querySelectorAll("button");
const messageContainer = document.querySelector("#message");
const message = document.querySelector("#message p");
const b1 = document.getElementById("area1");
const b2 = document.getElementById("area2");
const b3 = document.getElementById("area3");
const b4 = document.getElementById("area4");
const b5 = document.getElementById("area5");
const b6 = document.getElementById("area6");
const b7 = document.getElementById("area7");
const b8 = document.getElementById("area8");
const b9 = document.getElementById("area9");
let xSpan = document.getElementById("span-x");
let oSpan = document.getElementById("span-o");
let xScore = 0;
let oScore = 0;
let secondPlayer;

// seleção do modo de jogo
twoPlayers.addEventListener("click", (e) => {
  secondPlayer = 0;
  twoPlayers.style.display = "none";
  aiPlayer.style.display = "none";
  h3.textContent = "Jogando o modo de dois jogadores!";
  refresh.style.display = "block";
});

aiPlayer.addEventListener("click", (e) => {
  secondPlayer = 1;
  twoPlayers.style.display = "none";
  aiPlayer.style.display = "none";
  h3.textContent = "Jogando contra a IA!"
  refresh.style.display = "block";
});

//botão de recarregar a página
refresh.addEventListener("click", (e) => {
  location.reload();
})

// contador de jogadas
let player1 = 0;
let player2 = 0;

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    let move;

    // verifica se o bloco já possui alguma jogada
    if (this.childNodes.length == 0) {
      //2 players
      if (secondPlayer == 0) {
        if (player1 == player2) {
          move = x;
          player1++;
        } else {
          move = o;
          player2++;
        }
      }

      //contra ia
      if (secondPlayer == 1) {
        if (player1 == player2) {
          move = x;
          player1++;
          player2++;
          aiMove()
        }
      }


      let cloneMove = move.cloneNode(true);

      cloneMove.style.display = "block";

      this.appendChild(cloneMove);

      checkWinner();
    }
  });
}

//função de declarar vitória
function checkWinner() {
  setTimeout(function(){
    //verifica a vitória das horizontais
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].id;
    let b2Child = b2.childNodes[0].id;
    let b3Child = b3.childNodes[0].id;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      xWinner();
      refreshGame();
      return;
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      oWinner();
      refreshGame();
      return;
    }
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].id;
    let b5Child = b5.childNodes[0].id;
    let b6Child = b6.childNodes[0].id;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      xWinner();
      refreshGame();
      return;
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      oWinner();
      refreshGame();
      return;
    }
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].id;
    let b8Child = b8.childNodes[0].id;
    let b9Child = b9.childNodes[0].id;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      xWinner();
      refreshGame();
      return;
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      oWinner();
      refreshGame();
      return;
    }
  }

  //verifica a vitória das verticais
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].id;
    let b4Child = b4.childNodes[0].id;
    let b7Child = b7.childNodes[0].id;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      xWinner();
      refreshGame();
      return;
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      oWinner();
      refreshGame();
      return;
    }
  }

  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].id;
    let b5Child = b5.childNodes[0].id;
    let b8Child = b8.childNodes[0].id;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      xWinner();
      refreshGame();
      return;
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      oWinner();
      refreshGame();
      return;
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].id;
    let b6Child = b6.childNodes[0].id;
    let b9Child = b9.childNodes[0].id;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      xWinner();
      refreshGame();
      return;
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      oWinner();
      refreshGame();
      return;
    }
  }

  //verifica a vitória das diagonais
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].id;
    let b5Child = b5.childNodes[0].id;
    let b9Child = b9.childNodes[0].id;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      xWinner();
      refreshGame();
      return;
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      oWinner();
      refreshGame();
      return;
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].id;
    let b5Child = b5.childNodes[0].id;
    let b7Child = b7.childNodes[0].id;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      xWinner();
      refreshGame();
      return;
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      oWinner();
      refreshGame();
      return;
    }
  }
  }, 50)
  

  //deu velha
  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    draw();
    refreshGame();
  }
}

//função para fazer a IA jogar
function aiMove() {
  setTimeout(function(){
    let possibleMoves = [];

  for (let i = 0; i <= 8; i++) {
    if (boxes[i].childNodes.length == 0) {
      possibleMoves.push(i);
    }
  }

  let randomMove = Math.floor(Math.random() * possibleMoves.length);

  let currentMove = possibleMoves[randomMove]

  let move = o;

  let cloneMove = move.cloneNode(true);

  cloneMove.style.display = "block";

  boxes[currentMove].appendChild(cloneMove);
  }, 0)
}

//função de declarar vencedores e empate
function xWinner() {
  xScore++;

  xSpan.innerHTML = `X : ${xScore}`;
  message.innerHTML = 'O jogador 1 venceu! <i class="bi bi-trophy"></i>';
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 1500);
}

function oWinner() {
  oScore++;

  oSpan.innerHTML = `<i class="bi bi-circle"></i> : ${oScore}`;
  message.innerHTML = 'O jogador 2 venceu! <i class="bi bi-trophy"></i>';
  message.style.display = "block";

  setTimeout(() => {
    message.style.display = "none";
  }, 1500);
}

function draw() {
  message.innerHTML = "Deu velha!";
  message.style.display = "block";

  setTimeout(() => {
    message.style.display = "none";
  }, 1500);
}

//reseta o jogo
function refreshGame() {
  setTimeout(() => {
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
    b5.innerHTML = "";
    b6.innerHTML = "";
    b7.innerHTML = "";
    b8.innerHTML = "";
    b9.innerHTML = "";
    player1 = 0;
    player2 = 0;
  }, 1500);
}
