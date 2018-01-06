const Board = require('./board.js');
const Player = require('./player.js');
const Utility = require('./utility.js')
const Rules = require('./rules.js')

class Game {
  constructor(...players) {
    this.board = new Board();
    this.players = players;
    this.currentPlayerIndex = 0;
    this.largestArmy = null // eventually point to a player object
    this.longestRoad = null // eventually point to a player object
  }

  setupBoard() {
    this.board.generateTiles();
    this.board.connectNeighborTiles();
  }

  currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  otherPlayers() {
    return this.players.slice(0, this.currentPlayerIndex).concat(this.players.slice(this.currentPlayerIndex + 1));
  }

  updateCurrentPlayerIndex() {
    if (this.currentPlayerIndex === this.players.length - 1) {
      this.currentPlayerIndex = 0;
    } else {
      this.currentPlayerIndex++;
    }
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

  // here we want to roll 2 die (random # between 1 & 6)
  // then get the tiles which are associated with the nums
  // and distribute their resources to players accordingly
  // distribute 1 per settlement
  // distribute 2 per city
  rollDiceAndDistributeResources(){
    const diceNum1 = Math.floor((Math.random() * 6) + 1);
    const diceNum2 = Math.floor((Math.random() * 6) + 1);
    const roll = diceNum1 + diceNum2;

    // don't do anything conventional if seven is rolled
    if (roll === 7) {
      this.handleSevenRolled();
    } else {
      const rolledTiles = this.board.tiles.filter(tile => tile.diceNum === role);

      rolledTiles.forEach(tile => {
        distributeResources(tile);
      })
    }

  }

  // distribute resources
  // here we want to push resources to a players hand if they are occupying a tile
  // give them n resources of the tile resource type based on the player's structure type
  distributeResources(tile) {
    console.log('distibute resources based on occupation');
  }

  // handle sevens being rolled
  // players with > 7 cards need to discard half their resources of their choosing
  // current player moves the robber
  // and steals a resource at random from a player that is occupying the new robber space
  handleSevenRolled() {
    console.log('seven rolled');
  }

  // if a player has 10 points or greater,
  // the game is over
  // we want to check if the current player has won after every turn
  checkForVictory(){
    return this.getPlayerTotalPoints(this.currentPlayer()) >= Rules.pointsRequiredToWin;
  } 
  
  // get player's total points
  // need to account for:
  // number of settlements
  // number of cities
  // largest army
  // longest road
  // victory points
  getPlayerTotalPoints(player) {
    const settlementPoints = player.structures.filter(structure => structure instanceof Settlement).length;
    const cityPoints = player.structures.filter(structure => structure instanceof City).length * 2;
    const largestArmyPoints = this.largestArmy === player ? 2 : 0;
    const longestRoadPoints = this.longestRoad === player ? 2 : 0;

    return settlementPoints + cityPoints + largestArmyPoints + longestRoadPoints + player.revealedVP + player.hiddenVP;
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

const smartbot = new Player('Smartbot');
const spitebot = new Player('Spitebot');
const speckbot = new Player('Speckbot');
const otherbot = new Player('Otherbot');
game = new Game(smartbot, spitebot, speckbot, otherbot);
game.setupBoard();
smartbot.addResources({ lumber: 1, sheep: 1, brick: 1, wheat: 1 });
smartbot.buildSettlement(game, 0, 'se');
smartbot.buildRoad(game, 0, 'se');
smartbot.buildRoad(game, 3, 'e');

const allOrientations = ['ne', 'e', 'se', 'sw', 'w', 'nw'];
for (var i = 0; i < 19; i++) {
  console.log(`${i}:`);
  console.log(game.board.tiles[i]);
}
debugger
