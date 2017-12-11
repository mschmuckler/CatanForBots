module.exports = {
  enoughResources: (player, item) => {
    switch (item) {
      case 'road':
        return (player.hand.lumber >= 1 &&
                player.hand.brick >= 1) ?
                true : false
      case 'settlement':
        return (player.hand.lumber >= 1 &&
                player.hand.brick >= 1 &&
                player.hand.sheep >= 1 &&
                player.hand.wheat >= 1) ?
                true : false
      case 'city':
        return (player.hand.wheat >= 2 &&
                player.hand.ore >= 3) ?
                true : false
      case 'devCard':
        return (player.hand.wheat >= 1 &&
                player.hand.ore >= 1 &&
                player.hand.sheep >= 1) ?
                true : false
      default:
        // Allows for custom checking in the form of a plain JS object,
        // for ex. item -> { lumber: 2, sheep: 1 }
        let result = true;
        Object.keys(item).forEach(resource => {
          if (player.hand[resource] < item[resource]) {
            result = false;
          }
        });
        return result;
    }
  }, // Player has enough resources to buy thing

  connectingCorners: (corner)=>{}, // Returns all tile corners that connect

  connectingSides: (side)=>{}, // Returns all tile sides that connect

  oppositeOrientation: (orientation) => {
    switch (orientation) {
      case 'n':
        return 's';
      case 'ne':
        return 'sw';
      case 'e':
        return 'w';
      case 'se':
        return 'nw';
      case 's':
        return 'n';
      case 'sw':
        return 'ne';
      case 's':
        return 'e';
      case 'nw':
        return 'se';
    }
  },

  buildNeighboringSide: (road, selectedTile, orientation) => {
    const neighbor = selectedTile.neighbors[orientation];
    if (neighbor) {
      neighbor.sides[module.exports.oppositeOrientation(orientation)] = road;
    }
  },

  buildNeighboringCorners: (structure, selectedTile, orientation) => {
    switch (orientation) {
      case 'n':
        if (selectedTile.neighbors.nw) {
          selectedTile.neighbors.nw.corners.se = structure;
        }
        if (selectedTile.neighbors.ne) {
          selectedTile.neighbors.ne.corners.sw = structure;
        }
        break;
      case 'ne':
        if (selectedTile.neighbors.ne) {
          selectedTile.neighbors.ne.corners.s = structure;
        }
        if (selectedTile.neighbors.e) {
          selectedTile.neighbors.e.corners.nw = structure;
        }
        break;
      case 'se':
        if (selectedTile.neighbors.e) {
          selectedTile.neighbors.e.corners.sw = structure;
        }
        if (selectedTile.neighbors.se) {
          selectedTile.neighbors.se.corners.n = structure;
        }
        break;
      case 's':
        if (selectedTile.neighbors.se) {
          selectedTile.neighbors.se.corners.nw = structure;
        }
        if (selectedTile.neighbors.sw) {
          selectedTile.neighbors.sw.corners.ne = structure;
        }
        break;
      case 'sw':
        if (selectedTile.neighbors.sw) {
          selectedTile.neighbors.sw.corners.n = structure;
        }
        if (selectedTile.neighbors.w) {
          selectedTile.neighbors.w.corners.se = structure;
        }
        break;
      case 'nw':
        if (selectedTile.neighbors.w) {
          selectedTile.neighbors.w.corners.ne = structure;
        }
        if (selectedTile.neighbors.nw) {
          selectedTile.neighbors.nw.corners.s = structure;
        }
        break;
    }
  },
};
