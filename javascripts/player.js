const Road = require('./road.js')
const Settlement = require('./settlement.js')
const City = require('./city.js')
const Utility = require('./utility.js')

module.exports = class Player {
  constructor(name) {
    this.name = name;
    this.hand = {
      wheat: 0,
      lumber: 0,
      sheep: 0,
      brick: 0,
      ore: 0,
    },
    this.structures = [];
    this.roads = [];
    this.revealedVP = 0;
    this.hiddenVP = 0;
  }

  spendResources(item) {
    switch (item) {
      case 'road':
        this.hand.lumber -= 1;
        this.hand.brick -= 1;
        break;
      case 'settlement':
        this.hand.lumber -= 1;
        this.hand.brick -= 1;
        this.hand.sheep -= 1;
        this.hand.wheat -= 1;
        break;
      case 'city':
        this.hand.wheat -= 2;
        this.hand.ore -= 3;
        break;
      case 'devCard':
        this.hand.wheat -= 1;
        this.hand.ore -= 1;
        this.hand.sheep -= 1;
        break;
      default:
        // Allows for custom spendatures in the form of a plain JS object,
        // for ex. item -> { lumber: 2, sheep: 1 }
        Object.keys(item).forEach(resource => {
          this.hand[resource] -= item[resource];
        });
    }
  }

  buildSettlement(gameState, tileCoord, orientation) {
    const selectedTile = gameState.board.tiles[tileCoord];
    const settlement = new Settlement(this);
    selectedTile.corners[orientation] = settlement;
    Utility.buildNeighboringCorners(settlement, selectedTile, orientation);
  } // Default action, should be private and unalterable.

  buildCity(){} // Default action, should be private and unalterable.

  buildRoad(gameState, tileCoord, orientation) {
    const selectedTile = gameState.board.tiles[tileCoord];
    const road = new Road(this);
    selectedTile.sides[orientation] = road;
    Utility.buildNeighboringSide(road, selectedTile, orientation);
  } // Default action, should be private and unalterable.

  stealResource(){} // Default action, should be private and unalterable.

  offerTrade(gameState){} // To be filled in with custom bot AI

  playDevCardPhase(gameState){} // To be filled in with custom bot AI

  buyDevCardPhase(gameState){} // To be filled in with custom bot AI

  buildingPhase(gameState){} // To be filled in with custom bot AI
}
