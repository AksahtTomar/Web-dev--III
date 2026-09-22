// app.js
// Entry point — sets up the Express server, wires up middleware and
// modular routes, and starts listening.

const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware to parse incoming JSON bodies (needed for POST/PUT)
app.use(express.json());

// Custom logger middleware — runs on every request
app.use(logger);

// Simple welcome route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Student Management REST API is running",
    endpoints: {
      getAll: "GET /students",
      getOne: "GET /students/:id",
      create: "POST /students",
      update: "PUT /students/:id",
      delete: "DELETE /students/:id",
    },
  });
});

// Modular routes — everything under /students is handled here
app.use("/students", studentRoutes);

// 404 handler — for any route that doesn't match above
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Centralized error-handling middleware — catches anything passed via next(err)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
