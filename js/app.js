/* GLOBAL VARIABLES */
var activePlayerIndex = 0;
var computerMoves = 0;
var gameType = "Computer";
var players = [{
  name: 'Player 1',
  symbol: 'x',
  winningRounds: 4,
  scorePoints: 3
},
{
  name: 'Player 2',
  symbol: 'o',
  winningRounds: 4,
  scorePoints: 4
}];

var winningCombinationIndexes = [[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]];

/* GAME FUNCTIONS */
$(document).ready(initBoardClickHandlers);

/*
setPlayerToken - Sets player token in the board

Arguments:
$boardPosition [jQuery Element] - Element to insert user token into
 */
function setPlayerToken($boardPosition) {
  if (isBoardPositionEmpty($boardPosition)) {
    $boardPosition.attr('data-user-token', players[activePlayerIndex].symbol);
    return checkRoundWinner();
  }
}

/*
checkRoundWinner - Checks for a round winner
 */
function checkRoundWinner() {
  var activePlayer = players[activePlayerIndex];
  var boardScores = getCurrentBoardRowScores();
  var winningScoreValue = activePlayer.scorePoints * 3;
  var isWinningCombination = boardScores.indexOf(winningScoreValue) > 0;

  if (isWinningCombination) {
    activePlayer.winningRounds++;
    return $(document).trigger('roundWinner', activePlayer);
  } else {
    return boardHasEmptySpaces() ? switchActivePlayer() : setTimeout(clearBoard, 300);
  }
}

/*
isGameWinner - Checks for a game winner
 */
function isGameWinner() {
  let winner = players.filter(player => player.winningRounds === 5);

  return winner.length > 0;
}

/*
swicthActivePlayer - Toggles the active player and checks for computer's turn
 */
function switchActivePlayer () {
  activePlayerIndex = players[activePlayerIndex].symbol === players[0].symbol ? 1 : 0;
  var activePlayer = players[activePlayerIndex];

  if (gameType === "Computer" && activePlayer.symbol === players[1].symbol) {
    setTimeout(getComputerMove, 500);
  }
}

/* COMPUTER MOVES */

/*
getComputerMove - Gets computer move strategy
 */
function getComputerMove() {
  computerMoves++;
  let $boardSpaces = getBoardSpaceElements();
  let isComputerFirstMove = computerMoves < 2;

  if (isComputerFirstMove) {
    var centerSpaceIndex = 4;
    var $centerSpaceElement = $($boardSpaces[centerSpaceIndex]);
    var isCenterSpaceEmpty = isBoardPositionEmpty($centerSpaceElement);

    return isCenterSpaceEmpty ? setPlayerToken($centerSpaceElement) : randomCorner();
  }

  var currentBoardValues = getCurrentBoardValues();
  var bestMove = makeHigherScoreMove(currentBoardValues);
  var move = bestMove ? bestMove : randomPlay();
  setPlayerToken($(move));
}

/*
randomCorner - Select a random corner and makes a move
 */
function randomCorner() {
  var $boardSpaces = getBoardSpaceElements();
  var cornerIndexes = [0, 2, 6, 8];
  var randomCornerIndex = cornerIndexes[Math.floor(Math.random() * cornerIndexes.length)];

  return setPlayerToken($($boardSpaces[randomCornerIndex]));
}

/*
randomPlay - Select a random empty space and move token there
 */
function randomPlay() {
  var emptyBoardSpaces = emptyBoardSpaceElements();
  var randomNumber = Math.floor(Math.random() * emptyBoardSpaces.length);

  return $(emptyBoardSpaces[randomNumber]);
}

/*
makeHigherScoreMove - Checks for the highest scoring move and makes it

Arguments:
combinations [Array] - An array of the winning combinations with its current board value
 */
function makeHigherScoreMove(winningCombinationsBoardValues) {
  var $boardSpaces = getBoardSpaceElements();
  var moveScores = getCurrentBoardRowScores();
  var bestMoves = {
    winningMoveRowIndex: moveScores.indexOf(players[1].scorePoints * 2),
    blockingMoveRowIndex: moveScores.indexOf(players[0].scorePoints * 2),
    competingMoveRowIndex: moveScores.indexOf(players[1].scorePoints)
  };

  for (var key in bestMoves) {
    var isMovePossible = bestMoves[key] >= 0;
    if (isMovePossible) {
      var emptySpaceIndex = findEmptySpaceIndexInRow(winningCombinationsBoardValues[bestMoves[key]]);
      return $($boardSpaces[winningCombinationIndexes[bestMoves[key]][emptySpaceIndex]]);
      break;
    }
  }
}

/* HELPER FUNCTIONS */

/*
boardHasEmptySpaces - Checks if the board has empty spaces left

Returns:
[Boolean] - True if there are still empty spaces in the board
 */
function boardHasEmptySpaces() {
  let $emptySpaces = emptyBoardSpaceElements();
  return $emptySpaces.length > 0;
}

/*
boardHasEmptySpaces - Returns the board empty spaces left

Returns:
[Array] - Array of jquery board space elements
 */
function emptyBoardSpaceElements() {
  return $('[data-user-token="0"]');
}

/*
triggerWinnerPopup - Triggers winner popup and sets the content

Arguments:
type [String] - The type of win (round or game)
winner [Object] - The winner player object
 */

function triggerWinnerPopup(type, winner) {
  $('[data-modal-content]').html(`${winner.name} wins the ${type}!`);
  $(`[data-score-marker-player="${winner.symbol}"]`).html(winner.winningRounds);
  toggle($('[data-modal]'), 'is-open');
}

/*
clearScore - Resets the players winning rounds and resets the score marker
 */
function clearScore() {
  players.map(player => player.winningRounds = 0);
  $('[data-score-marker-player]').html('0');
}

/* isBoardPositionEmpty - Checks if a board position is empty or taken
  arguments:
  $boardSpace [jQuery element] - The element to check if empty

  returns:
  Boolean - True if element is empty
 */
function isBoardPositionEmpty($boardSpace) {
  return $boardSpace.attr('data-user-token') == 0;
}

/*
getBoardSpaceElements- Returns an array with all the spaces in the board
Returns:

[Array] - An array of the all the board space jquery elements
 */
function getBoardSpaceElements() {
  return $('[data-user-token]');
}

/*
getCurrentBoardTokenPositions - Returns an array with the current tokens values in the board
Returns:

[Array] - An array of the current token values in all the board spaces
 */
function getCurrentBoardTokenPositions() {
  let $boardPositionElements = $('[data-board-position]');

  return $boardPositionElements.map((i) => {
    let $boardSpace = $($boardPositionElements[i]);
    return $boardSpace.attr('data-user-token');
  });
}

/*
clearBoard - Removes all the tokens in the board and sets computer moves to 0
 */
function clearBoard() {
  $('[data-board-position]').attr('data-user-token', '0');
  computerMoves = 0;
}

/*
toggle - Toggles an element's class
Arguments:

$section [jQuery Element] - The section to be toggled
className [String] - The classname to toggle
 */
function toggle($section, className) {
  return $section.hasClass(className) ? $section.removeClass(className) : $section.addClass(className);
}

/* gameMode- Changes the game mode from computer to two players
 */
function gameMode(mode) {
  gameType = mode;
  activePlayerIndex = 0;
  toggle($('[data-menu]'), 'is-open');
  clearScore();
  clearBoard();
}

/* getCurrentBoardValues - Creates an array of all the winningMoves and its current board value
  returns:
   [Array] - Array with all the possible winning combinations and its current score values
 */
function getCurrentBoardValues() {
  var board = getCurrentBoardTokenPositions();
  var winningCombinationBoardValues = [];

  for (var boardRow = 0; boardRow < winningCombinationIndexes.length; boardRow++) {
    var valuesBoardRow = [];

    for (var boardSpaceIndex = 0; boardSpaceIndex < winningCombinationIndexes[boardRow].length; boardSpaceIndex++) {
      var index = winningCombinationIndexes[boardRow][boardSpaceIndex];

      if (board[index] === players[0].symbol) {
        valuesBoardRow.push(players[0].scorePoints);
      } else if (board[index] === players[1].symbol) {
        valuesBoardRow.push(players[1].scorePoints);
      } else {
        valuesBoardRow.push(Number(board[index]));
      }

      if (boardSpaceIndex  === winningCombinationIndexes[boardRow].length - 1) {
        winningCombinationBoardValues.push(valuesBoardRow);
      }
    }

    if (boardRow  === winningCombinationIndexes.length - 1) {
      return winningCombinationBoardValues;
    }
  }
}

/* getCurrentBoardRowScores - Find the current board scores to decide which row to go for
  returns:
   [Array] - Array with the sum of row values
 */
function getCurrentBoardRowScores() {
  var winningCombination = getCurrentBoardValues();
  return winningCombination.map(combination => combination.reduce(add, 0));
}

/* findEmptySpaceIndexInRow - Find the empty space in a row
  arguments:
   row [Array] - Row to parse to find empty index
 */
function findEmptySpaceIndexInRow(row) {
  for (var i = 0; i < row.length; i++) {
    if (row[i] == 0) {
      return i;
    }
  }
}

/* add - Adds up two numbers
  arguments:
   a [Number] - First number to be added
   b [Number] - Second number to be added
 */
function add(a, b) {
  return a + b;
}

/* EVENT HANDLERS */

// Init click handler on board spaces to record user move
function initBoardClickHandlers() {
  $('[data-board-position]').click(function(e) {
    var $clickedBoardPosition = $(e.target);

    return setPlayerToken($clickedBoardPosition);
  });
}

// Create custom gameWinner event to be fired when there is an overall game winner
$(document).on('gameWinner', function(e, winner) {
  setTimeout(() => {
    triggerWinnerPopup('game', winner);
  }, 700);
  clearScore();
});

// Create custom roundWinner event to be fired when there is a round winner
$(document).on('roundWinner', function(e, winner) {
  var activePlayer = players[activePlayerIndex];

  if (isGameWinner()) {
    $(document).trigger('gameWinner', activePlayer);
  } else {
    setTimeout(() => {
      triggerWinnerPopup('round', winner);
    }, 700);
  }
});

// Custom event to fire when modal is closed
$('[data-modal]').on('close', function() {
  clearBoard();
  toggle($(this), 'is-open');

  if (activePlayerIndex === 1) {
    setTimeout(getComputerMove, 400);
  }
});

// Click handler for modal button
$('[data-modal-button]').click(function() {
  $('[data-modal]').trigger('close');
});

// Click handler for menu toggle
$('[data-menu-toggle]').click(function() {
  toggle($('[data-menu]'), 'is-open');
});
