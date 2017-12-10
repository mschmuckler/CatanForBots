const Board = require('./board.js');

class Game {
  constructor(...players) { 
    this.board = new Board();
    this.players = players
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
  
  // mainGameLoop() {
  //   let playerHasWon = false;
  //   let currentPlayer = 0;
  // 
  //   this.setupBoard();
  //   this.setupInitialSettlements();
  // 
  //   while(!playerHasWon) {
  //     this.rollDiceAndDistributeResources();
  //     this.players[currentPlayer].tradingPhase();
  //     this.players[currentPlayer].playDevCardPhase();      
  //     this.players[currentPlayer].buyDevCardPhase();      
  //     this.players[currentPlayer].buildingPhase();
  // 
  //     playerHasWon = this.checkForVictory();
  // 
  //     if (currentPlayer === this.players.length - 1) {
  //       currentPlayer = 0;
  //     } else {
  //       currentPlayer++;
  //     }
  //   }
  // }
}

temp = new Game('msm', 'lat', 'xor', 'pyt')
temp.setupBoard();
// temp.setupInitialSettlements();
console.log(temp.board);