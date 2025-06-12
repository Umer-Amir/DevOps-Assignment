const express = require("express");
const morgan = require("morgan");
const logger = require("./logger"); // we'll define this in a moment

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// HTTP request logging
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

// Routes
app.get("/", (req, res) => {
  logger.info("GET /");
  res.send("Hello from Task Manager backend!");
});

app.get("/health", (req, res) => {
  logger.info("Health check called");
  res.status(200).json({ status: "OK" });
});

// Error handler
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
app.listen(PORT, () => {
  logger.info(`Backend server listening on port ${PORT}`);
});
