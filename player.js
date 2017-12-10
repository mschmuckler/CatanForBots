// Player should never ask for STDIN, design is for automatic bots.
// For example, Player object may receive a call to its 'chooseToBuild' function,
// and it should return either true with a set of tile coordinates 
// and specifications (settlement/city/road), or false.
//
// It is up to the bot's designer to implement a decision making process.

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