const Tile = require('./tile.js')

module.exports = class Board {
  constructor() {
    this.tiles = {};
  }
  
  generateTiles() {
    let resources = [
      'sheep', 'sheep', 'sheep', 'sheep',
      'lumber', 'lumber', 'lumber', 'lumber',
      'wheat', 'wheat', 'wheat', 'wheat',
      'brick', 'brick', 'brick',
      'ore', 'ore', 'ore', 'desert'
    ];
    let diceNums = [
      12, 11, 10, 9, 8, 6, 5, 4, 3, 2,
      11, 10, 9, 8, 6, 5, 4, 3, 7
    ];
    let tempResource, tempDiceNum;
    
    for (let i = 0; i < 19; i++) {
      tempResource = Math.round(Math.random() * (resources.length - 1));
      tempDiceNum = Math.round(Math.random() * (diceNums.length - 1));

      if(resources[tempResource] === 'desert' || diceNums[tempDiceNum] === 7){
        this.tiles[i] = new Tile('desert', 7)
        resources.pop();
        diceNums.pop();
      }
      else{
        this.tiles[i] = new Tile(resources[tempResource], diceNums[tempDiceNum]);
        
        resources = resources.slice(0, tempResource).concat(resources.slice(tempResource + 1));
        diceNums = diceNums.slice(0, tempDiceNum).concat(diceNums.slice(tempDiceNum + 1));
      }
      
    }
    
  }
  
  // call after creating Tiles
  connectNeighborTiles() {
    // W = i - 1, null if 0, 3, 7, 12, 16
    // E = i + 1, null if 2, 6, 11, 15, 18
    // NW = i - 4 if 2nd || 5th row,
    //      i - 5 if 3rd || 4th row,
    //      null if 0, 1, 2, 3, 7
    // NE = i - 3 if 2nd || 5th row,
    //      i - 4 if 3rd || 4th row,
    //      null if 0, 1, 2, 6, 11
    // SW = i + 3 if 1nd || 4th row,
    //      i + 4 if 2rd || 3th row,
    //      null if 7, 12, 16, 17 18
    // SE = i + 4 if 1nd || 4th row,
    //      i + 5 if 2rd || 3th row,
    //      null if 11, 15, 16, 17, 18
    
    const westNulls = [0, 3, 7, 12, 16];
    const eastNulls = [2, 6, 11, 15, 18];
    const nwNulls = [0, 1, 2, 3, 7];
    const neNulls = [0, 1, 2, 6, 11];
    const swNulls = [7, 12, 16, 17, 18];
    const seNulls = [11, 15, 16, 17, 18];
    const firstRow = [0, 1, 2];
    const secondRow = [3, 4, 5, 6];
    const fourthRow = [12, 13, 14, 15];
    const fifthRow = [16, 17, 18];
    
    for (let i = 0; i < 19; i++) {
      if (!westNulls.includes(i)) {
        this.tiles[i].neighbors.w = this.tiles[i - 1];
      }
      
      if (!eastNulls.includes(i)) {
        this.tiles[i].neighbors.e = this.tiles[i + 1];
      }
      
      if (!nwNulls.includes(i)) {
        this.tiles[i].neighbors.nw = (secondRow.includes(i) || fifthRow.includes(i)) ?
        this.tiles[i - 4] :
        this.tiles[i - 5];
      }
      
      if (!neNulls.includes(i)) {
        this.tiles[i].neighbors.ne = (secondRow.includes(i) || fifthRow.includes(i)) ?
        this.tiles[i - 3] :
        this.tiles[i - 4];
      }
      
      if (!swNulls.includes(i)) {
        this.tiles[i].neighbors.sw = (firstRow.includes(i) || fourthRow.includes(i)) ?
        this.tiles[i + 3] :
        this.tiles[i + 4];
      }
      
      if (!seNulls.includes(i)) {
        this.tiles[i].neighbors.se = (firstRow.includes(i) || fourthRow.includes(i)) ?
        this.tiles[i + 4] :
        this.tiles[i + 5];
      }
    }
  }
}