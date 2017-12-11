module.exports = {
  validRoad: ()=>{}, // Connects with settlement/road, doesn't go through other player structures

  validSettlement: ()=>{}, // Connects with road, at least 1 empty corner space between other structures

  validCity: ()=>{}, // Settlement exists in that spot

  // I think these would be helpful functions...
  enoughResources: ()=>{}, // Player has enough resources to buy thing
  connectingCorners: (corner)=>{}, // Returns all tile corners that connect
  connectingSides: (side)=>{}, // Returns all tile sides that connect
};
