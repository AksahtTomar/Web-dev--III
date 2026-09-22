const log = require("./modules/logger");


const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return a / b;
    default:
      throw new Error(`Invalid operation: "${op}". Use add, sub, mul or div.`);
  }
}


if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input!");
  console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
  console.log("Example: node calculator.js add 10 5");
  process.exit(1);
}

try {
  log(`Running operation "${operation}" on ${num1} and ${num2}`);
  const result = calculate(operation, num1, num2);
  console.log("Result:", result);
} catch (err) {
  
  console.log("Error:", err.message);
}


