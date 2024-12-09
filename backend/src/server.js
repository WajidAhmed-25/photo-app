const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const photoRoutes = require("./routes/photoRoutes");
const commentRoutes = require("./routes/commentRoutes");

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/photos", photoRoutes);
app.use("/comments", commentRoutes);

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
