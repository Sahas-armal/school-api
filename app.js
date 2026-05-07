const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());


const schoolRoutes = require("./routes/schoolRoutes");
app.use("/", schoolRoutes);


const db = require("./config/db");

db.connect((err) => {
  if (err) console.log("DB error", err);
  else console.log("DB connected ");
});


app.get("/", (req, res) => {
  res.send("API working ");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});