const Utility = require('./utility.js');

module.exports = {
  validRoad: ()=>{}, // Connects with settlement/road, doesn't go through other player structures

  validSettlement: (player, selectedTile, orientation) => {
    let result = true;
      if (!Utility.enoughResources(player, 'settlement')) {
        result = false;
        console.log(`${player.name} doesn't have enough resources to build a settlement!`);
      }
      if (!Utility.emptySpace(selectedTile, 'corners', orientation)) {
        result = false;
        console.log(`That corner is already taken!`);
      }
      if (!Utility.minimumCornerDistance(selectedTile, orientation)) {
        result = false;
        console.log(`That's too close to another structure!`);
      }
      if (!Utility.cornerConnectsToRoad(player, selectedTile, orientation)) {
        result = false;
        console.log(`${player.name} doesn't have any connecting roads at that corner!`);
      }
    return result;
  },

  validCity: ()=>{}, // Settlement exists in that spot
};
