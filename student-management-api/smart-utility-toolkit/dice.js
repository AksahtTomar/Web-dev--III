const crypto = require("crypto");
const log = require("./modules/logger");

function rollDice() {
 
  return crypto.randomInt(1, 7);
}

log("Rolling dice 5 times using crypto module");

for (let i = 1; i <= 5; i++) {
  const value = rollDice();
  console.log(`Roll ${i}: Dice Rolled -> ${value}`);
}


