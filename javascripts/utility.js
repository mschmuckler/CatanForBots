module.exports = {
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