module.exports = class Player {
  constructor() {
    this.hand = [];
    this.structures = [];
    this.roads = [];
    this.vp = 0;
  }

  buildRoad(){} // Default action, should be private and unalterable.
  
  buildSettlement(){} // Default action, should be private and unalterable.
  
  buildCity(){} // Default action, should be private and unalterable.
  
  stealResource(){} // Default action, should be private and unalterable.
  
  offerTrade(gameState){} // To be filled in with custom bot AI
  
  playDevCardPhase(gameState){} // To be filled in with custom bot AI
  
  buyDevCardPhase(gameState){} // To be filled in with custom bot AI
  
  buildingPhase(gameState){} // To be filled in with custom bot AI
}