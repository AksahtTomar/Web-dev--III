const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("Starting app.js - testing isEven module");

const numbers = [1, 2, 3, 4, 5, 10, 17, 20];

numbers.forEach((n) => {
  if (isEven(n)) {
    console.log(`${n} is Even`);
  } else {
    console.log(`${n} is Odd`);
  }
});

log("Finished checking numbers. This shows module reusability using require().");


