const userRoutes = require("./routes/userRoutes");
const materialsRoutes = require("./routes/materialsRoutes");
const demandeRoutes = require("./routes/demandeRoutes");
const mongoose =require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());


// Routes
app.use("/user", userRoutes);
app.use("/api/products", materialsRoutes);
app.use("/api/orders", demandeRoutes);

// Connect to MongoDB
mongoose.connect(process.env.URL).then(() => {
  console.log("🟢 Connected To DataBase");
  // Listen for requests
  const PORT = 3002;
  app.listen(PORT, () => {
    console.log(`🟢 Server started on port ${PORT}`);
  });
});
