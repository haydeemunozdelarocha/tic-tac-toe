
//get user move
// var topLeft = document.getElementById("top-left");
var gameOption = "Computer";
var activePlayer = "Player 1";
var board = [["free","free","free"], ["free","free","free"], ["free","free","free"]];
var freeSpaces =["top-left","top-center","top-right","center-left","center","center-right","bottom-left","bottom-center","bottom-right"];
var availableSpaces =[];
var player1Moves = [];
var player="player2";
var randomNumber = "";
var player1Wins = 0;
var computerWins = 0;
var player2Wins = 0;
var lastWin = " ";
var overallWinner = " ";
var totalMoves = 0;
var seconds = 10;

window.onload=function (){
    var topLeft = document.getElementById("top-left");
    topLeft.addEventListener("click", activeTopLeft);
    var topCenter = document.getElementById("top-center");
    topCenter.addEventListener("click", activeTopCenter);
    var topRight = document.getElementById("top-right");
    topRight.addEventListener("click", activeTopRight);
    var centerLeft = document.getElementById("center-left");
    centerLeft.addEventListener("click", activeCenterLeft);
    var center = document.getElementById("center");
    center.addEventListener("click", activeCenter);
    var centerRight = document.getElementById("center-right");
    centerRight.addEventListener("click", activeCenterRight);
    var bottomLeft = document.getElementById("bottom-left");
    bottomLeft.addEventListener("click", activeBottomLeft);
    var bottomCenter = document.getElementById("bottom-center");
    bottomCenter.addEventListener("click", activeBottomCenter);
    var bottomRight = document.getElementById("bottom-right");
    bottomRight.addEventListener("click", activeBottomRight);
    }

    function activeTopLeft() {
    if (board[0][0] === "free") {
      if (gameOption === "2Players") {
        if (activePlayer === "Player 1") {
          this.className = ('top-left-player1');
          board[0][0] = 'player1';
          freeSpaces[0] = 0;
          totalMoves++;
          console.log("player1topleft");
          getPlayer2Move();
        }
        else if(activePlayer === "Player 2") {
          this.className = ('top-left-player2');
          board[0][0] = 'player2';
          totalMoves++;
          console.log("player2topleft");
          getPlayer1Move();
        }
      } else if (gameOption === "Computer") {
       if (activePlayer === "Player 1") {
          this.className = ('top-left-player1');
          board[0][0] = 'player1';
          totalMoves++;
          freeSpaces[0] = 0;
          console.log("player1topleft");
          getComputerMove();
      }
      else if (activePlayer === "Computer") {
          return;
      }
    }
  }
  else {
    return;
  }
}

    function activeTopCenter() {
    if (board[0][1] === "free") {
      if (gameOption === "2Players") {
        if (activePlayer === "Player 1") {
          this.className = ('top-center-player1');
          board[0][1] = 'player1';
          totalMoves++;
          freeSpaces[1] = 0;
          console.log("player1topcenter");
          getPlayer2Move();
        }
        else if(activePlayer === "Player 2") {
          this.className = ('top-center-player2');
          board[0][1] = 'player2';
          totalMoves++;
          console.log("player2topcenter");
          getPlayer1Move();
        }
    } else if (gameOption === "Computer") {
       if (activePlayer === "Player 1") {
          this.className = ('top-center-player1');
          board[0][1] = 'player1';
          totalMoves++;
          freeSpaces[1] = 0;
          console.log("player1topcenter");
          getComputerMove();
      }
      else if (activePlayer === "Computer") {
          return;
      }
  }
   }
  else {
    return;
  }
}

    function activeTopRight() {
    if (board[0][2] === "free") {
      if (gameOption === "2Players") {
        if (activePlayer === "Player 1") {
          this.className = ('top-right-player1');
          board[0][2] = 'player1';
          totalMoves++;
          freeSpaces[2] = 0;
          console.log("player1topright");
          getPlayer2Move();
        }
        else if(activePlayer === "Player 2") {
          this.className = ('top-right-player2');
          board[0][2] = 'player2';
          totalMoves++;
          console.log("player2topright");
          getPlayer1Move();
        }
    } else if (gameOption === "Computer") {
       if (activePlayer === "Player 1") {
          this.className = ('top-right-player1');
          board[0][2] = 'player1';
          totalMoves++;
          freeSpaces[2] = 0;
          console.log("player1topright");
          getComputerMove();
      }
      else if (activePlayer === "Computer") {
          return;
      }
  }
   }
  else {
    return;
  }
}

    function activeCenterLeft() {
    if (board[1][0] === "free") {
      if (gameOption === "2Players") {
        if (activePlayer === "Player 1") {
          this.className = ('center-left-player1');
          board[1][0] = 'player1';
          totalMoves++;
          freeSpaces[3] = 0;
          console.log("playercenterleft");
          getPlayer2Move();
        }
        else if(activePlayer === "Player 2") {
          this.className = ('center-left-player2');
          board[1][0] = 'player2';
          totalMoves++;
          console.log("player2centerleft");
          getPlayer1Move();
        }
    } else if (gameOption === "Computer") {
       if (activePlayer === "Player 1") {
          this.className = ('center-left-player1');
          board[1][0] = 'player1';
          totalMoves++;
          freeSpaces[3] = 0;
          console.log("playercenterleft");
          getComputerMove();
      }
      else if (activePlayer === "Computer") {
          return;
      }
  }
   }
  else {
    return;
  }
}

    function activeCenter() {
    if (board[1][1] === "free") {
      if (gameOption === "2Players") {
        if (activePlayer === "Player 1") {
          this.className = ('center-player1');
          board[1][1] = 'player1';
          totalMoves++;
          freeSpaces[4] = 0;
          console.log("player1center");
          getPlayer2Move();
        }
        else if(activePlayer === "Player 2") {
          this.className = ('center-player2');
          board[1][1] = 'player2';
          totalMoves++;
          console.log("player2center");
          getPlayer1Move();
        }
    } else if (gameOption === "Computer") {
       if (activePlayer === "Player 1") {
          this.className = ('center-player1');
          board[1][1] = 'player1';
          totalMoves++;
          freeSpaces[4] = 0;
          console.log("player1center");
          getComputerMove();
      }
      else if (activePlayer === "Computer") {
          return;
      }
  }
   }
  else {
    return;
  }
}

    function activeCenterRight() {
    if (board[1][2] === "free") {
      if (gameOption === "2Players") {
      if (activePlayer === "Player 1") {
        this.className = ('center-right-player1');
        board[1][2] = 'player1';
        totalMoves++;
        freeSpaces[5] = 0;
        console.log("player1centerright");
        getPlayer2Move();
        }
        else if(activePlayer === "Player 2") {
        this.className = ('center-right-player2');
        board[1][2] = 'player2';
        totalMoves++;
        console.log("player2centerright");
        getPlayer1Move();
      }
    } else if (gameOption === "Computer") {
       if (activePlayer === "Player 1") {
          this.className = ('center-right-player1');
          board[1][2] = 'player1';
          totalMoves++;
          freeSpaces[5] = 0;
          console.log("player1centerright");
          getComputerMove();
      }
      else if (activePlayer === "Computer") {
          return;
      }
    }
     }
  else {
    return;
  }
}
    function activeBottomLeft() {
    if (board[2][0] === "free") {
      if (gameOption === "2Players") {
      if (activePlayer === "Player 1") {
        this.className = ('bottom-left-player1');
        board[2][0] = 'player1';
        totalMoves++;
        freeSpaces[6] = 0;
        console.log("player1bottomleft");
        getPlayer2Move();
        }
        else if(activePlayer === "Player 2") {
        this.className = ('bottom-left-player2');
        board[2][0] = 'player2';
        totalMoves++;
        console.log("player2centerright");
        getPlayer1Move();
      }
    } else if (gameOption === "Computer") {
       if (activePlayer === "Player 1") {
          this.className = ('bottom-left-player1');
          board[2][0] = 'player1';
          totalMoves++;
          freeSpaces[6] = 0;
          console.log("player1centerright");
          getComputerMove();
      }
      else if (activePlayer === "Computer") {
          return;
      }
    }
     }
  else {
    return;
  }
}

  function activeBottomCenter() {
    if (board[2][1] === "free") {
      if (gameOption === "2Players") {
      if (activePlayer === "Player 1") {
        this.className = ('bottom-center-player1');
        board[2][1] = 'player1';
        totalMoves++;
        freeSpaces[7] = 0;
        console.log("playerbottomcenter");
        getPlayer2Move();
        }
      else if(activePlayer === "Player 2") {
        this.className = ('bottom-center-player2');
        board[2][1] = 'player2';
        totalMoves++;
        console.log("player2bottomcenter");
        getPlayer1Move();
      }
    } else if (gameOption === "Computer") {
       if (activePlayer === "Player 1") {
          this.className = ('bottom-center-player1');
          board[2][1] = 'player1';
          totalMoves++;
          freeSpaces[7] = 0;
          console.log("playerbottomcenter");
          getComputerMove();
      }
      else if (activePlayer === "Computer") {
          return;
      }
    }
     }
  else {
    return;
  }
}

    function activeBottomRight() {
    if (board[2][2] === "free") {
      if (gameOption === "2Players") {
      if (activePlayer === "Player 1") {
        this.className = ('bottom-right-player1');
        board[2][2] = 'player1';
        totalMoves++;
       freeSpaces[8] = 0;
        console.log("playerbottomright");
        getPlayer2Move();
        }
      else if(activePlayer === "Player 2") {
        this.className = ('bottom-right-player2');
        board[2][2] = 'player2';
        totalMoves++;
        freeSpaces[8] = 0;
        console.log("player2bottomright");
        getPlayer1Move();
      }
    } else if (gameOption === "Computer") {
       if (activePlayer === "Player 1") {
          this.className = ('bottom-right-player1');
          board[2][2] = 'player1';
          totalMoves++;
          freeSpaces[8] = 0;
          console.log("playerbottomright");
          getComputerMove();
      }
      else if (activePlayer === "Computer") {
          return;
      }
    }
     }
  else {
    return;
  }
}

  function getPlayer1Move() {
    activePlayer="Player 1";
    console.log(activePlayer);
    document.getElementById("o-marker").className = "";
    document.getElementById("x-marker").className = "x-marker";
    getWinner();
    noWinner();
    playToFive();
    return;
  }

  function getPlayer2Move() {
    activePlayer="Player 2";
    console.log(activePlayer);
    document.getElementById("x-marker").className = "";
    document.getElementById("o-marker").className = "o-marker";
    getWinner();
    noWinner();
    playToFive();
    return;
  }

   function getComputerMove() {
    activePlayer="Computer";
    console.log(activePlayer);
    document.getElementById("x-marker").className = "";
    document.getElementById("o-marker").className = "o-marker";
    getWinner();
    noWinner();
    setTimeout(computerMove, 1500);
    playToFive();
    return;
  }

// //get computer move

function randomPlay() {
//   availableSpaces.splice(0, availableSpaces.length);
// for (var i = 0; i < freeSpaces.length ; i++) {
//   if(freeSpaces[i] === 0) {
//     continue;
//   }
//   else {
//     availableSpaces.push(freeSpaces[i]);
//   }
// }
randomNumber = freeSpaces[Math.floor(Math.random() * freeSpaces.length)];
if(randomNumber === 0) {
  randomPlay();
}
console.log(randomNumber);
}

function computerMove() {
    randomPlay();
    if (randomNumber === "top-left") {
          freeSpaces[0] = 0;
          totalMoves++;
          console.log("computertopleft");
          board[0][0] = 'computer';
          var topLeft = document.getElementById("top-left");
          topLeft.className = ('top-left-player2');
          getPlayer1Move();
    } else if (randomNumber === "top-center") {
          freeSpaces[1] = 0;
          totalMoves++;
          console.log("computertopcenter");
          board[0][1] = 'computer';
          var topCenter = document.getElementById("top-center");
          topCenter.className = ('top-center-player2');
          getPlayer1Move();
    }
    else if (randomNumber === "top-right") {
          freeSpaces[2] = 0;
          totalMoves++;
          console.log("computertopright");
          board[0][2] = 'computer';
          var topRight = document.getElementById("top-right");
          topRight.className = ('top-right-player2');
          getPlayer1Move();
    }
    else if (randomNumber === "center-left") {
          freeSpaces[3] = 0;
          totalMoves++;
          console.log("computercenterleft");
          board[1][0] = 'computer';
          var centerLeft = document.getElementById("center-left");
          centerLeft.className = ('center-left-player2');
          getPlayer1Move();
    }else if (randomNumber === "center") {
          freeSpaces[4] = 0;
          totalMoves++;
          console.log("computercenter");
          board[1][1] = 'computer';
          var center = document.getElementById("center");
          center.className = ('center-player2');
          getPlayer1Move();
    }else if (randomNumber === "center-right") {
          freeSpaces[5] = 0;
          totalMoves++;
          console.log("computercenterright");
          board[1][2] = 'computer';
          var centerRight = document.getElementById("center-right");
          centerRight.className = ('center-right-player2');
          getPlayer1Move();
    }else if (randomNumber === "bottom-left") {
            freeSpaces[6] = 0;
            totalMoves++;
            console.log("computerbottomleft");
            board[2][0] = 'computer';
            var bottomLeft = document.getElementById("bottom-left");
            bottomLeft.className = ('bottom-left-player2');
            getPlayer1Move();
    }else if (randomNumber === "bottom-center") {
            freeSpaces[7] = 0;
            totalMoves++;
            console.log("computerbottomcenter");
            board[2][1] = 'computer';
            var bottomCenter = document.getElementById("bottom-center");
            bottomCenter.className = ('bottom-center-player2');
            getPlayer1Move();
    }else if(randomNumber === "bottom-right") {
          freeSpaces[8] = 0;
          totalMoves++;
          console.log("computerbottomright");
          board[2][2] = 'computer';
          var bottomRight = document.getElementById("bottom-right");
          bottomRight.className = ('bottom-right-player2');
          getPlayer1Move();
        }
      else {
        resetBoard();
      }
    }
function clickPopUp(){
    var popUpDiv = document.getElementById("popupelements");
    popUpDiv.addEventListener("click", popUpDiv);
  }
function getPopUpWindow() {

    document.getElementById("popup").className = "popUpDiv";
    document.getElementById("popupbutton").className = "popUpButton";
    document.getElementById("popupwindow").className = "popUpWindow";
    document.getElementById("popupwindow").innerHTML = lastWin + " Wins!!";
    document.getElementById("popupbutton").innerHTML = "Keep Playing";
}
    function hidePopUp () {
    document.getElementById("popup").className = " ";
    document.getElementById("popupwindow").className = " ";
    document.getElementById("popupbutton").className = " ";
    document.getElementById("popupwindow").innerHTML = " ";
    document.getElementById("popupbutton").innerHTML = " ";
    resetBoard();

    }

    function getWinnerPopUpWindow() {

    document.getElementById("popup").className = "popUpDiv";
    document.getElementById("popupbutton").className = "popUpButton";
    document.getElementById("popupwindow").className = "popUpWindow";
    document.getElementById("popupwindow").innerHTML = overallWinner + " Wins this round!!";
    document.getElementById("popupbutton").innerHTML = "Play Again?";
    resetGame();
}
    function hideWinnerPopUp () {
    document.getElementById("popup").className = " ";
    document.getElementById("popupwindow").className = " ";
    document.getElementById("popupbutton").className = " ";
    document.getElementById("popupwindow").innerHTML = " ";
    document.getElementById("popupbutton").innerHTML = " ";
    }
function getWinner() {
if(player1Wins < 5 && computerWins < 5 && player2Wins < 5) {
  if (board[0][0] === "player1" && board[0][1] === "player1" && board[0][2] === "player1") {
    player1Wins++;
    document.getElementById("player1Wins").innerHTML = player1Wins;
    lastWin = "Player 1";
    console.log("Player1Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[1][0] === "player1" && board[1][1] === "player1" && board[1][2] === "player1") {
    player1Wins++;
    document.getElementById("player1Wins").innerHTML = player1Wins;
    lastWin = "Player 1";
    console.log("Player1Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[2][0] === "player1" && board[2][1] === "player1" && board[2][2] === "player1") {
    player1Wins++;
    document.getElementById("player1Wins").innerHTML = player1Wins;
    lastWin = "Player 1";
    console.log("Player1Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[0][0] === "player1" && board[1][0] === "player1" && board[2][0] === "player1") {
    player1Wins++;
    document.getElementById("player1Wins").innerHTML = player1Wins;
    lastWin = "Player 1";
    console.log("Player1Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[0][1] === "player1" && board[1][1] === "player1" && board[2][1] === "player1") {
    player1Wins++;
    document.getElementById("player1Wins").innerHTML = player1Wins;
    lastWin = "Player 1";
    console.log("Player1Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[0][2] === "player1" && board[1][2] === "player1" && board[2][2] === "player1") {
    player1Wins++;
    document.getElementById("player1Wins").innerHTML = player1Wins;
    lastWin = "Player 1";
    console.log("Player1Wins")
    setTimeout(getPopUpWindow, 900);
  }
   else if (board[0][0] === "player1" && board[1][1] === "player1" && board[2][2] === "player1") {
    player1Wins++;
    document.getElementById("player1Wins").innerHTML = player1Wins;
    lastWin = "Player 1";
    console.log("Player1Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[0][2] === "player1" && board[1][1] === "player1" && board[2][0] === "player1") {
    player1Wins++;
    document.getElementById("player1Wins").innerHTML = player1Wins;
    lastWin = "Player 1";
    console.log("Player1Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[0][0] === "player2" && board[0][1] === "player2" && board[0][2] === "player2") {
    player2Wins++;
    document.getElementById("player2Wins").innerHTML = player2Wins;
    lastWin = "Player 2";
    console.log("Player2Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[1][0] === "player2" && board[1][1] === "player2" && board[1][2] === "player2") {
    player2Wins++;
    document.getElementById("player2Wins").innerHTML = player2Wins;
    lastWin = "Player 2";
     console.log("Player2Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[2][0] === "player2" && board[2][1] === "player2" && board[2][2] === "player2") {
    player2Wins++;
    document.getElementById("player2Wins").innerHTML = player2Wins;
    lastWin = "Player 2";
     console.log("Player2Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[0][0] === "player2" && board[1][0] === "player2" && board[2][0] === "player2") {
    player2Wins++;
    document.getElementById("player2Wins").innerHTML = player2Wins;
    lastWin = "Player 2";
     console.log("Player2Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[0][1] === "player2" && board[1][1] === "player2" && board[2][1] === "player2") {
    player2Wins++;
    document.getElementById("player2Wins").innerHTML = player2Wins;
    lastWin = "Player 2";
     console.log("Player2Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[0][2] === "player2" && board[1][2] === "player2" && board[2][2] === "player2") {
    player2Wins++;
    document.getElementById("player2Wins").innerHTML = player2Wins;
    lastWin = "Player 2";
     console.log("Player2Wins")
    setTimeout(getPopUpWindow, 900);
  }
   else if (board[0][0] === "player2" && board[1][1] === "player2" && board[2][2] === "player2") {
    player2Wins++;
    document.getElementById("player2Wins").innerHTML = player2Wins;
   lastWin = "Player 2";
    console.log("Player2Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[0][2] === "player2" && board[1][1] === "player2" && board[2][0] === "player2") {
    player2Wins++;
    document.getElementById("player2Wins").innerHTML = player2Wins;
    lastWin = "Player 2";
     console.log("Player2Wins")
    setTimeout(getPopUpWindow, 900);
  }
    else if (board[0][0] === "player2" && board[0][1] === "player2" && board[0][2] === "player2") {
    player2Wins++;
    document.getElementById("player2Wins").innerHTML = player2Wins;
    lastWin = "Player 2";
     console.log("Player2Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[1][0] === "player2" && board[1][1] === "player2" && board[1][2] === "player2") {
    player2Wins++;
    document.getElementById("player2Wins").innerHTML = player2Wins;
    lastWin = "Player 2";
     console.log("Player2Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[2][0] === "player2" && board[2][1] === "player2" && board[2][2] === "player2") {
    player2Wins++;
    document.getElementById("player2Wins").innerHTML = player2Wins;
    lastWin = "Player 2";
     console.log("Player2Wins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[0][0] === "computer" && board[0][1] === "computer" && board[0][2] === "computer") {
    computerWins++;
    document.getElementById("player2Wins").innerHTML = computerWins;
    lastWin = "Computer";
     console.log("ComputerWins")
    setTimeout(getPopUpWindow, 900);
  }
  else if (board[1][0] === "computer" && board[1][1] === "computer" && board[1][2] === "computer") {
    computerWins++;
    document.getElementById("player2Wins").innerHTML = computerWins;
    lastWin = "Computer";
     console.log("ComputerWins")
    setTimeout(getPopUpWindow, 1000);
  }
  else if (board[2][0] === "computer" && board[2][1] === "computer" && board[2][2] === "computer") {
    computerWins++;
    document.getElementById("player2Wins").innerHTML = computerWins;
    lastWin = "Computer";
     console.log("ComputerWins")
    setTimeout(getPopUpWindow, 1000);
  }
    else if (board[0][0] === "computer" && board[1][0] === "computer" && board[2][0] === "computer") {
    computerWins++;
    document.getElementById("player2Wins").innerHTML = computerWins;
    lastWin = "Computer";
     console.log("ComputerWins")
    setTimeout(getPopUpWindow, 1000);
  }
     else if (board[0][1] === "computer" && board[1][1] === "computer" && board[2][1] === "computer") {
    computerWins++;
    document.getElementById("player2Wins").innerHTML = computerWins;
    lastWin = "Computer";
     console.log("ComputerWins")
    setTimeout(getPopUpWindow, 1000);
  }
     else if (board[0][2] === "computer" && board[1][2] === "computer" && board[2][2] === "computer") {
    computerWins++;
    document.getElementById("player2Wins").innerHTML = computerWins;
    lastWin = "Computer";
     console.log("ComputerWins")
    setTimeout(getPopUpWindow, 1000);
  }
   else if (board[0][0] === "computer" && board[1][1] === "computer" && board[2][2] === "computer") {
    computerWins++;
    document.getElementById("player2Wins").innerHTML = computerWins;
   lastWin = "Computer";
    console.log("ComputerWins")
    setTimeout(getPopUpWindow, 1000);
  }
  else if (board[0][2] === "computer" && board[1][1] === "computer" && board[2][0] === "computer") {
    computerWins++;
    document.getElementById("player2Wins").innerHTML = computerWins;
    lastWin = "Computer";
     console.log("ComputerWins")
    setTimeout(getPopUpWindow, 1000);
  }
  else if (board[0][0] != "free" && board[0][1] != "free" && board[0][2] != "free" && board[1][0] != "free" && board[1][1] != "free" && board[1][2] != "free" && board[2][0] != "free" && board[2][1] != "free" && board[2][2] != "free") {
    console.log("tie");
    setTimeout(resetBoard, 1000);
  }
}
else {
  playToFive();
}
}
function playToFive() {
  if (player1Wins == 5 || player2Wins == 5 || computerWins == 5) {
      if (player1Wins == 5) {
        overallWinner = "Player 1";
      }
      else if (player2Wins == 5) {
        overallWinner = "Player 2";
      }
      else if (computerWins == 5) {
        overallWinner = "Computer";
      }
      getWinnerPopUpWindow();
  }
}

function resetGame() {
  player1Wins = 0;
  player2Wins = 0;
  computerWins = 0;
  document.getElementById("player1Wins").innerHTML = 0;
  document.getElementById("player2Wins").innerHTML = 0;
  if (overallWinner === "Player 1") {
      document.getElementById("o-marker").className = "";
      document.getElementById("x-marker").className = "x-marker";
      }
      else if(overallWinner === "Player 2") {
        document.getElementById("x-marker").className = "";
        document.getElementById("o-marker").className = "o-marker";
      }
      else if(overallWinner === "Computer") {
        document.getElementById("x-marker").className = "";
        document.getElementById("o-marker").className = "o-marker";
      }
    resetBoard();
}
function noWinner () {
  if (totalMoves === 9) {
    resetBoard();
  }
}
function playComputer() {
  gameOption = "Computer";
  var footermenu = document.getElementById('menu');
  footermenu.style.display='none';
  resetBoard();
  console.log("computer");
}

function twoPlayers() {
  activePlayer = "Player 1";
  gameOption = "2Players";
  var footermenu = document.getElementById('menu');
  footermenu.style.display='none';
  resetBoard();
  console.log("2Players");
}
// function getFooterMenu () {
//     console.log("footermenu");
//     document.getElementById("menu").className = "menu";
function getFooterMenu() {
  console.log("footermenu");
    if (document.getElementById("menu").className === "menu-hidden") {
        document.getElementById("menu").className = "menu";
    } else if (document.getElementById("menu").className === "menu") {
        document.getElementById("menu").className === "menu-hidden";
        document.getElementById("dot").className = "dot";
    }
}

function hideFooterMenu () {
    console.log("footermenuout");
    document.getElementById("menu").className = "menu-hidden";
    }

var timerMove = setInterval(timer, 1000);

function timer() {
    seconds--;
    document.getElementById("timer").innerHTML = "00:0" + (seconds);
    if (seconds === 0) {
      if (gameOption === "Computer") {
        if (activePlayer === "Player 1") {
            getComputerMove();
            seconds = 10;
          }
          else if (activePlayer === "Computer") {
            getPlayer1Move();
            seconds = 10;
          }
      }
      else if(gameOption === "2Players") {
        if (activePlayer === "Player 1") {
          getPlayer2Move();
          seconds = 10;
        }
        else if (activePlayer === "Player 2") {
          getPlayer1Move();
          seconds = 10;
        }
      }
    }
}


function resetBoard () {
  var topLeft = document.getElementById("top-left");
    topLeft.className = ('top-left');
    var topCenter = document.getElementById("top-center");
    topCenter.className = ('top-center');
    var topRight = document.getElementById("top-right");
    topRight.className = ('top-right');
    var centerLeft = document.getElementById("center-left");
    centerLeft.className = ('center-left');
    var center = document.getElementById("center");
    center.className = ('center');
    var centerRight = document.getElementById("center-right");
    centerRight.className = ('center-right');
    var bottomLeft = document.getElementById("bottom-left");
    bottomLeft.className = ('bottom-left');
    var bottomCenter = document.getElementById("bottom-center");
    bottomCenter.className = ('bottom-center');
    var bottomRight = document.getElementById("bottom-right");
    bottomRight.className = ('bottom-right');
    freeSpaces.splice(0,freeSpaces.length);
    totalMoves = 0;
    seconds= 10;
    freeSpaces.push("top-left","top-center","top-right","center-left","center","center-right","bottom-left","bottom-center","bottom-right");
    board = [["free","free","free"], ["free","free","free"], ["free","free","free"]];
      activePlayer = lastWin;
      if (activePlayer === "Player 1") {
      document.getElementById("o-marker").className = "";
      document.getElementById("x-marker").className = "x-marker";
      }
      else if(activePlayer === "Player 2") {
      document.getElementById("x-marker").className = "";
      document.getElementById("o-marker").className = "o-marker";
      }
      else if(activePlayer === "Computer") {
        getComputerMove();
      }
      console.log("reset board");
  }


// //if three rows, columns or lines are equal set winner

// //if playerWins or computerWins equal number of games set overall winner

// //start again

// //if user clicks on menu, make it visible

