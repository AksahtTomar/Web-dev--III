// middleware/logger.js
// Custom logger middleware — logs the HTTP method, the URL that was
// hit, and the timestamp of the request. Runs on every request because
// it's mounted with app.use() in app.js before the routes.

function logger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next(); // pass control to the next middleware/route handler
}

module.exports = logger;
