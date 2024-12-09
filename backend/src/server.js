const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const photoRoutes = require("./routes/photoRoutes");
const commentRoutes = require("./routes/commentRoutes");

dotenv.config();
const app = express();

// Enable CORS before defining routes
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from your React frontend
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}));

// Handle preflight OPTIONS requests for all routes
app.options('*', cors());

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/photos", photoRoutes);
app.use("/comments", commentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
