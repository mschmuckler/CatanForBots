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

let temp = new Tile('lorem', 5);
console.log(temp);