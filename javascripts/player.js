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

  buildSettlement(gameState, tileCoord, orientation) {
    const settlement = new Settlement(this);
    const selectedTile = gameState.board.tiles[tileCoord];
    
    selectedTile.corners[orientation] = settlement;
    Utility.buildNeighboringCorners(settlement, selectedTile, orientation);
  } // Default action, should be private and unalterable.
  
  buildCity(){} // Default action, should be private and unalterable.
  
  buildRoad(){} // Default action, should be private and unalterable.
  
  stealResource(){} // Default action, should be private and unalterable.
  
  offerTrade(gameState){} // To be filled in with custom bot AI
  
  playDevCardPhase(gameState){} // To be filled in with custom bot AI
  
  buyDevCardPhase(gameState){} // To be filled in with custom bot AI
  
  buildingPhase(gameState){} // To be filled in with custom bot AI
}