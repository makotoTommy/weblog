const express = require("express");
const app =express();

// routesへのパス
app.use("/", require("./routes/index.js"));