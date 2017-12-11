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

  emptySpace: (selectedTile, sidesOrCorners, orientation) => {
    return !selectedTile[sidesOrCorners][orientation];
  },

  cornerConnectsToRoad: (player, selectedTile, orientation) => {
    let result = false;
    switch (orientation) {
      case 'n':
        if (selectedTile.sides.nw &&
            selectedTile.sides.nw.owner === player) {
          result = true;
        }
        if (selectedTile.sides.ne &&
            selectedTile.sides.ne.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.nw &&
            selectedTile.neighbors.nw.sides.e &&
            selectedTile.neighbors.nw.sides.e.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.ne &&
            selectedTile.neighbors.ne.sides.w &&
            selectedTile.neighbors.ne.sides.w.owner === player) {
          result = true;
        }
        return result;
      case 'ne':
        if (selectedTile.sides.ne &&
            selectedTile.sides.ne.owner === player) {
          result = true;
        }
        if (selectedTile.sides.e &&
            selectedTile.sides.e.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.ne &&
            selectedTile.neighbors.ne.sides.se &&
            selectedTile.neighbors.ne.sides.se.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.e &&
            selectedTile.neighbors.e.sides.nw &&
            selectedTile.neighbors.e.sides.nw.owner === player) {
          result = true;
        }
        return result;
      case 'se':
        if (selectedTile.sides.e &&
            selectedTile.sides.e.owner === player) {
          result = true;
        }
        if (selectedTile.sides.sw &&
            selectedTile.sides.sw.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.e &&
            selectedTile.neighbors.e.sides.sw &&
            selectedTile.neighbors.e.sides.sw.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.se &&
            selectedTile.neighbors.se.sides.ne &&
            selectedTile.neighbors.se.sides.ne.owner === player) {
          result = true;
        }
        return result;
      case 's':
        if (selectedTile.sides.sw &&
            selectedTile.sides.sw.owner === player) {
          result = true;
        }
        if (selectedTile.sides.se &&
            selectedTile.sides.se.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.se &&
            selectedTile.neighbors.se.sides.w &&
            selectedTile.neighbors.se.sides.w.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.sw &&
            selectedTile.neighbors.sw.sides.e &&
            selectedTile.neighbors.sw.sides.e.owner === player) {
          result = true;
        }
        return result;
      case 'sw':
        if (selectedTile.sides.sw &&
            selectedTile.sides.sw.owner === player) {
          result = true;
        }
        if (selectedTile.sides.w &&
            selectedTile.sides.w.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.sw &&
            selectedTile.neighbors.sw.sides.nw &&
            selectedTile.neighbors.sw.sides.nw.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.w &&
            selectedTile.neighbors.w.sides.se &&
            selectedTile.neighbors.w.sides.se.owner === player) {
          result = true;
        }
        return result;
      case 'nw':
        if (selectedTile.sides.w &&
            selectedTile.sides.w.owner === player) {
          result = true;
        }
        if (selectedTile.sides.nw &&
            selectedTile.sides.nw.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.w &&
            selectedTile.neighbors.w.sides.ne &&
            selectedTile.neighbors.w.sides.ne.owner === player) {
          result = true;
        }
        if (selectedTile.neighbors.nw &&
            selectedTile.neighbors.nw.sides.sw &&
            selectedTile.neighbors.nw.sides.sw.owner === player) {
          result = true;
        }
        return result;
    }
  },

  adjacentCorners: (selectedTile, orientation) => {
    const result = [];
    switch (orientation) {
      case 'n':
        result.push(selectedTile.corners.nw);
        result.push(selectedTile.corners.ne);
        if (selectedTile.neighbors.nw) {
          result.push(selectedTile.neighbors.nw.corners.ne);
        } else if (selectedTile.neighbors.ne) {
          result.push(selectedTile.neighbors.ne.corners.nw);
        }
        return result;
      case 'ne':
        result.push(selectedTile.corners.n);
        result.push(selectedTile.corners.se);
        if (selectedTile.neighbors.ne) {
          result.push(selectedTile.neighbors.ne.corners.se);
        } else if (selectedTile.neighbors.e) {
          result.push(selectedTile.neighbors.e.corners.n);
        }
        return result;
      case 'se':
        result.push(selectedTile.corners.ne);
        result.push(selectedTile.corners.s);
        if (selectedTile.neighbors.e) {
          result.push(selectedTile.neighbors.e.corners.s);
        } else if (selectedTile.neighbors.se) {
          result.push(selectedTile.neighbors.se.corners.ne);
        }
        return result;
      case 's':
        result.push(selectedTile.corners.se);
        result.push(selectedTile.corners.sw);
        if (selectedTile.neighbors.se) {
          result.push(selectedTile.neighbors.se.corners.sw);
        } else if (selectedTile.neighbors.sw) {
          result.push(selectedTile.neighbors.sw.corners.se);
        }
        return result;
      case 'sw':
        result.push(selectedTile.corners.s);
        result.push(selectedTile.corners.nw);
        if (selectedTile.neighbors.sw) {
          result.push(selectedTile.neighbors.sw.corners.nw);
        } else if (selectedTile.neighbors.w) {
          result.push(selectedTile.neighbors.w.corners.s);
        }
        return result;
      case 'nw':
        result.push(selectedTile.corners.sw);
        result.push(selectedTile.corners.n);
        if (selectedTile.neighbors.w) {
          result.push(selectedTile.neighbors.w.corners.n);
        } else if (selectedTile.neighbors.nw) {
          result.push(selectedTile.neighbors.nw.corners.sw);
        }
        return result;
    }
  }, // Returns all tile corners that directly connect

  adjacentSides: (side)=>{}, // Returns all tile sides that directly connect

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
