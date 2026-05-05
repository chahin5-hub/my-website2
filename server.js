const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// اتصال MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/store");

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/product"));

app.listen(3000, () => console.log("🚀 Server running"));
