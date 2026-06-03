const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/nutrients", require("./routes/nutrientRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});