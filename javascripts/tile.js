module.exports = class Tile {
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
    this.sides = {
      ne: null,
      e: null,
      se: null,
      sw: null,
      w: null,
      nw: null,
    };
  }
}