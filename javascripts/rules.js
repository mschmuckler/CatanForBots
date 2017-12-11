const Utility = require('./utility.js');

module.exports = {
  validRoad: ()=>{}, // Connects with settlement/road, doesn't go through other player structures

  validSettlement: ()=>{}, // Connects with road, at least 1 empty corner space between other structures

  validCity: ()=>{}, // Settlement exists in that spot
};
