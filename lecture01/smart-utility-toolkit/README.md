# Smart Utility Toolkit

Lab Assignment 1 - Web Dev III (Node.js & Express Backend), Unit 1.
Built using only Node.js core modules (`process`, `http`, `fs`, `crypto`) -
no external npm packages, no Express.

## Folder Structure

```
smart-utility-toolkit/
├── calculator.js       # CLI calculator using process.argv
├── app.js               # Demonstrates custom module reuse (isEven + logger)
├── server.js             # HTTP server with multiple routes
├── fileManager.js        # File CRUD operations using fs
├── dice.js                # Random dice generator using crypto
├── test.txt                # Sample file used by fileManager.js
├── modules/
│   ├── isEven.js          # Custom module - checks even/odd
│   └── logger.js          # Custom module - logs messages with timestamp
└── README.md
```

## How to Run

### 1. CLI Calculator
```
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5
```
Handles invalid operations and division by zero gracefully.

### 2. Custom Module Demo
```
node app.js
```
Uses `require("./modules/isEven")` and `require("./modules/logger")` to show
how a module exported with `module.exports` can be reused elsewhere.

### 3. HTTP Server
```
node server.js
```
Then open in the browser (or test with Postman):
- http://localhost:3000/        -> Welcome message
- http://localhost:3000/about   -> About page
- http://localhost:3000/contact -> Contact page
- any other route               -> 404 error message

### 4. File Manager (fs module)
```
node fileManager.js
```
Creates `test.txt`, reads it, updates it (appendFile), reads it again,
then deletes it. Also demonstrates graceful handling of a missing file.

### 5. Dice Generator (crypto module)
```
node dice.js
```
Rolls a 6-sided dice 5 times using `crypto.randomInt(1, 7)` for secure
randomness, printing each roll to the terminal.

## Learning Objectives Covered
- Running JavaScript outside the browser with Node.js
- Reading CLI input with `process.argv`
- Creating/reusing custom modules with `module.exports` and `require()`
- Building a server with the core `http` module
- CRUD file operations with `fs`
- Secure random number generation with `crypto`
- Observing sync vs async behavior via console logs

## Bonus Ideas Implemented
- Timestamped logs in `modules/logger.js`, used across every file.

## Bonus Ideas Not Yet Implemented (left for extension)
- Colored terminal output using ANSI escape codes
- Extra calculator operations (modulus, power, etc.)
- Storing dice roll history in a text file
