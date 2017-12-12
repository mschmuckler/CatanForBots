[This is a link](https://drive.google.com/file/d/1A1IQCAoZMX3eKgXNpmRTK253XWmw_XyU/view?usp=sharing) to a draw.io file with helpful pictures. Feel free to add anything and take notes here.

To execute program, either run it in console with `node javascripts/game.js` or run it in chrome browser console by starting up webpack with `webpack --watch` and opening index.html

## Primary To-Dos:
### game.js
  - rollDiceAndDistributeResources()
  - setupInitialSettlements()
  - checkForVictory()

### player.js
  - ~~buildRoad()~~
  - ~~buildSettlement()~~
  - ~~buildCity()~~
  - stealResource()

### rules.js
  - **validRoad()**
    - Everything is done except for ensuring connection doesn't intersect with enemy structure (must validate that road doesn't pass through another player's structure). See `roadDoesNotIntersectStructure()` in utility.js
  - ~~validSettlement()~~
  - ~~validCity()~~

## Secondary Concerns:
  - TRADING
  - Ports
  - Robber
  - Longest Road / Largest Army
  - Discard on 7 roll
