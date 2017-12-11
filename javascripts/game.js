const Board = require('./board.js');
const Player = require('./player.js');
const Utility = require('./utility.js')
const Rules = require('./rules.js')

class Game {
  constructor(...players) {
    this.board = new Board();
    this.players = players;
    this.currentPlayerIndex = 0;
    // otherPlayers is every other not-current player
    this.otherPlayers = this.players.slice(1);
  }

  setupBoard() {
    this.board.generateTiles();
    this.board.connectNeighborTiles();
  }


  currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  updateCurrentPlayerIndex() {
    if (this.currentPlayerIndex === this.players.length - 1) {
      this.currentPlayerIndex = 0;
    } else {
      this.currentPlayerIndex++;
    }
  }

  updateOtherPlayers() {
    this.otherPlayers = this.players.slice(0, this.currentPlayerIndex).concat(this.players.slice(this.currentPlayerIndex + 1));
  }

  takeTurn() {
    this.rollDiceAndDistributeResources();
    this.currentPlayer().tradingPhase(this);
    this.currentPlayer().playDevCardPhase(this);
    this.currentPlayer().buyDevCardPhase(this);
    this.currentPlayer().buildingPhase(this);
  }

  setupInitialSettlements() {
    for (let i = 0; i < this.players.length; i++) {
      // this.players[i].placeInitialSettlement;
    }
    for (let i = this.players.length - 1; i >= 0; i--) {
      // this.players[i].placeInitialSettlement;
    }

    // Distribute initial resources
  }

  rollDiceAndDistributeResources(){} // Need to implement

  checkForVictory(){} // Need to implement

  mainGameLoop() {
    let playerHasWon = false;

    this.setupBoard();
    this.setupInitialSettlements();

    while(!playerHasWon) {
      this.takeTurn();
      this.updateCurrentPlayerIndex();
      this.updateOtherPlayers();
      playerHasWon = this.checkForVictory();
    }
  }
}

const smartbot = new Player('Smartbot');
const spitebot = new Player('Spitebot');
const speckbot = new Player('Speckbot');
const otherbot = new Player('Otherbot');
game = new Game(smartbot, spitebot, speckbot, otherbot);
game.setupBoard();
smartbot.buildSettlement(game, 0, 'se');
smartbot.buildRoad(game, 0, 'se');
smartbot.buildRoad(game, 3, 'e');
for (var i = 0; i < 19; i++) {
  console.log(`${i}:`);
  console.log(game.board.tiles[i]);
}
debugger
