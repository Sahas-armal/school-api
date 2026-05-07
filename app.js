const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const schoolRoutes = require("./routes/schoolRoutes");
app.use("/", schoolRoutes);

const db = require("./config/db");



app.get("/", (req, res) => {
  res.send("API working ");
});

app.get("/db-test", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, data) => {
    if (err) return res.send(err);
    res.send(data);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});