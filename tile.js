class Tile {
  constructor(resourceType, diceNum) {
    this.resourceType = resourceType;
    this.diceNum = diceNum;
    this.neighbors = {
      ne: null,
      e: null,
      se: null,
      sw: null,
      w: null,
      nw: null,
    };
    this.corners = {
      n: null,
      ne: null,
      se: null,
      s: null,
      sw: null,
      nw: null,
    };
    this.roads = {
      ne: null,
      e: null,
      se: null,
      sw: null,
      w: null,
      nw: null,
    };
  }
}

// board.js - require tile.js
// board.js

class Board {
  constructor() {
    this.tiles = [];
  }
  
  createTiles() {
    let resources = [
      'sh', 'sh', 'sh', 'sh',
      'lu', 'lu', 'lu', 'lu',
      'wh', 'wh', 'wh', 'wh',
      'br', 'br', 'br',
      'o', 'o', 'o',
    ];
    let diceNums = [
      12, 11, 10, 9, 8, 6, 5, 4, 3, 2,
      11, 10, 9, 8, 6, 5, 4, 3,
    ];  
    let tempResource, tempDiceNum;
    
    while (resources[0] || diceNums[0]) {
      tempResource = Math.round(Math.random() * (resources.length - 1));
      tempDiceNum = Math.round(Math.random() * (diceNums.length - 1));
      
      this.tiles.push(
        new Tile(resources[tempResource], diceNums[tempDiceNum])
      );
      
      resources = resources.slice(0, tempResource).concat(resources.slice(tempResource + 1));
      diceNums = diceNums.slice(0, tempResource).concat(diceNums.slice(tempResource + 1));
    }
  }
  
  // call after creating Tiles
  connectNeighborTiles() {
    for (let i = 0; i < this.tiles.length; i++) {
      switch (i) {
        case 0:
          this.tiles[i].neighbors.e = this.tiles[1];
          this.tiles[i].neighbors.sw = this.tiles[3];
          this.tiles[i].neighbors.se = this.tiles[4];
          break;
      }
    }
  }
}

let temp = new Board();
temp.createTiles();
temp.connectNeighborTiles();

// board.js
// board.js

