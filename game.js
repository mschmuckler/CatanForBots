const Board = require('./board.js');

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

  setupInitialSettlements() {
    for (let i = 0; i < this.players.length; i++) {
      // this.players[i].placeInitialSettlement;
    }
    for (let i = this.players.length - 1; i >= 0; i--) {
      // this.players[i].placeInitialSettlement;
    }
    
    // Distribute initial resources
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

temp = new Game('msm', 'lat', 'xor', 'pyt')
temp.setupBoard();
// temp.setupInitialSettlements();
console.log(temp.board);
