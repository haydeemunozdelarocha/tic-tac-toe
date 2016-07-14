var activePlayer = 'Player1';
var inactivePlayer = 'Player2';
var Player1Wins = 0;
var Player2Wins = 0;
var rounds = 5;
var possibleMoves = [];
var board = ['top-left','top-center','top-right',
            'center-left','center','center-right',
            'bottom-left','bottom-center','bottom-right'];
var emptySpaces = [0,0,0,
                    0,0,0,
                    0,0,0];
var winner = "none";
var computerMoves=0;
var moves=0;
var gameType = "TwoPlayers";
var combinationIds = [["top-left", "top-center", "top-right"],
          ['center-left', 'center', 'center-right'],
          ['bottom-left', 'bottom-center', 'bottom-right'],
          ["top-left", 'center-left','bottom-left'],
          ["top-center", 'center', 'bottom-center'],
          ['top-right', 'center-right', 'bottom-right'],
          ["top-left", 'center', 'bottom-right'],
          ['bottom-left', 'center', 'top-right']];

window.onload=function (){

//if circle is clicked change to user move
    $('.circle').click( function activeCircle() {
       id = $(this).attr('id');
        getPlayerMove(id);
    });
}

function getPlayerMove(id) {
    console.log('get player move');
    console.log(id);
        if($('#'+id).hasClass('active')) {
            console.log('space taken');
        }
        $('#'+id).addClass('active');
        $('#'+id).addClass(activePlayer);
    for(var i = 0; i < board.length; i++) {
        if (board[i] === id) {
            board[i] = activePlayer;
            if (activePlayer === "Player1"){
              emptySpaces[i] = 3;
            } else if(activePlayer === "Player2"){
              emptySpaces[i] = 4;
            }
        }
    }
      moves++;
      console.log(emptySpaces);
      getWinner();
}

//after one player switch to the other player
function switchActivePlayer () {
  console.log('swicth active player')
  if(gameType === "Computer"){
    if (activePlayer === 'Player1') {
        activePlayer = 'Player2';
        inactivePlayer = 'Player1';
        console.log("active player:" + activePlayer)
          setTimeout(getComputerMove, 500);
    } else if(activePlayer === 'Player2') {
        activePlayer = 'Player1';
        inactivePlayer = 'Player2';
        console.log("active player:" + activePlayer)
        return;
    }
  } else if (gameType === "TwoPlayers") {
        if (activePlayer === 'Player1') {
        activePlayer = 'Player2';
        inactivePlayer = 'Player1';
    } else if(activePlayer === 'Player2') {
        activePlayer = 'Player1';
        inactivePlayer = 'Player2';
    }
  }
}

//check if there are three in a row
function getWinner() {
    console.log('get winner');
        if (moves >= 9){
          setTimeout(clearBoard,500);
          switchActivePlayer();
        } else if (board[0] === board[1] && board[1] === board[2]) {
          score(activePlayer);
        } else if ( board[3] === board[4] &&  board[4] === board[5] ) {
              score(activePlayer);
        } else if( board[6] === board[7] && board[7] === board[8]){
             score(activePlayer);
        } else if(board[0] === board[4] && board[4] === board[8]){
            score(activePlayer);
        } else if(board[2] === board[4] && board[4] === board[6]){
            score(activePlayer);
        } else if(board[0] === board[3]  && board[3] === board[6]) {
            score(activePlayer);
        } else if(board[1] === board[4]  && board[4] === board[7]) {
            score(activePlayer);
        } else if(board[2] === board[5]  && board[5] === board[8]) {
            score(activePlayer);
        } else {
          winner = "none";
          switchActivePlayer();
          return;
        }
}

//clear board
function clearBoard(){
  console.log('clear board');
  board = ['top-left','top-center','top-right',
            'center-left','center','center-right',
            'bottom-left','bottom-center','bottom-right'];
  emptySpaces = [0,0,0,
                    0,0,0,
                    0,0,0];
  possibleMoves =[];
  moves=0;
  computerMoves=0;
  $('.circle').removeClass('active');
  $('.circle').removeClass('Player1');
  $('.circle').removeClass('Player2');
}

//keeps score of games played
function score(activePlayer) {
  console.log(board);
  console.log('score');
  console.log('winner' + activePlayer);
        if(activePlayer === 'Player1'){
          Player1Wins++;
          $('#popupwindow').html("Player 1 Wins!");
          toggle('#popUp', 'none');
          $('#player1Wins').html(Player1Wins);
          activePlayer = "Player1";
        } else if (activePlayer === "Player2"){
          Player2Wins++;
          $('#popupwindow').html("Player 2 Wins!");
          toggle('#popUp', 'none');
          $('#player2Wins').html(Player2Wins);
          activePlayer = "Player2";
        }
  }

//determines round winner
function overallWinner(){
  console.log('overall winner')
  if(Player1Wins === rounds) {
    $('#popupwindow').html("Player 1 Wins!");
    toggle('#popUp', 'overall');
    $('#player1Wins').html('0');
  } else if(Player2Wins === rounds) {
    $('#popupwindow').html("Player 2 Wins!");
    $('#button').html("Player 2 Wins!");
    toggle('#popUp', 'overall');
    $('#player2Wins').html('0');
  } else {
    return;
  }
}

//shows and hides menu
function toggle(section, button){
console.log(section)
console.log("toggling")
  if (button === "overall"){
    $(section).toggle();
  }
  if(button === "none") {
    $(section).toggle();
  }else if(button ==="close") {
    $(section).toggle();
    keepPlaying();
  }
}

function keepPlaying(){
  overallWinner();
  clearBoard();

            if(gameType ==="Computer" && activePlayer === "Player2") {
              console.log('get computer move from score')
              setTimeout(getComputerMove, 500);
            }
}

//changes game mode
function gameMode(mode){
  if(mode ==='Computer') {
    gameType = 'Computer';
    activePlayer = "Player1";
    console.log('computer');
    toggle('.menu');
    clearBoard();
  } else {
    console.log('twoPlayers');
    gameType = 'TwoPlayers';
    activePlayer = "Player1"
    toggle('.menu');
    clearBoard();
  }
}

//gets computer move
function getComputerMove() {
    console.log('getting computer move');
    computerMoves++;
    if (computerMoves < 2 ){
        if(emptySpaces[4] ===  0){
          getPlayerMove('center');
        } else {
          console.log('randomCorner');
          randomCorner();
        }
    } else {
        turnToValues();
      }
    }


//random play
function randomPlay(){
  console.log('random play');
    var availableSpaces = [];
    for (var i = 0 ; i < emptySpaces.length ; i++) {
      if (emptySpaces[i] === 0) {
        availableSpaces.push(board[i]);
      }
    }
    var randomNumber = availableSpaces[Math.floor(Math.random() * availableSpaces.length)];
    getPlayerMove(randomNumber);
}

function randomCorner(){
  console.log('random corner')
    var availableSpaces = [];
    var moves = ["top-left","bottom-left", "top-right", "bottom-right"]
    var corners = [emptySpaces[0], emptySpaces[6], emptySpaces[2], emptySpaces[8]];
    for (var i = 0 ; i < corners.length ; i++) {
      if (corners[i] === 0) {
        availableSpaces.push(moves[i]);
      }
    }
    var corner = availableSpaces[Math.floor(Math.random() * availableSpaces.length)];
    getPlayerMove(corner);
}

function turnToValues() {
  console.log('turnToValues');
    var combinations = [[emptySpaces[0], emptySpaces[1], emptySpaces[2]],
          [emptySpaces[3], emptySpaces[4], emptySpaces[5]],
          [emptySpaces[6], emptySpaces[7], emptySpaces[8]],
          [emptySpaces[0], emptySpaces[3], emptySpaces[6]],
          [emptySpaces[1], emptySpaces[4], emptySpaces[7]],
          [emptySpaces[2], emptySpaces[5], emptySpaces[8]],
          [emptySpaces[0], emptySpaces[4], emptySpaces[8]],
          [emptySpaces[6], emptySpaces[4], emptySpaces[2]]];
            console.log(combinations);
      getMoves(combinations);

}

function getMoves(combinations){
    possibleMoves = [];
    for(var j = 0; j < combinations.length - 1; j++) {
      if(combinations[j].reduce(add, 0) === 8){
        possibleMoves.push(combinations[j]);
        for(var l = 0; l < combinations[j].length; l++){
          if(combinations[j][l] === 0){
            getPlayerMove(combinationIds[j][l]);
            return;
          }
        }
        return;
      } else if(combinations[j].reduce(add, 0) === 6){
        possibleMoves.push(combinations[j]);
        for(var l = 0; l < combinations[j].length; l++){
          if(combinations[j][l] === 0){
            getPlayerMove(combinationIds[j][l]);
            return;
          }
        }
        return;
      }
  }
  if(possibleMoves.length === 0){
    randomPlay();
  }
}
function add(a, b) {
    return a + b;
}
