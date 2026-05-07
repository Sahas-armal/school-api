const express = require("express");
const app = express();

require("dotenv").config();

const schoolRoutes = require("./routes/schoolRoutes");

require("./config/db");

app.use(express.json());

app.use("/", schoolRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});