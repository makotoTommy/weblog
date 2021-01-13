const express = require("express");
const app =express();

app.set("view engine", "ejs");
app.disable("x-powered-by"); // 無効化処理

// 静的ファイルの配信
app.use("/public", express.static(__dirname + "/public/" + (process.env.NODE === "prod" ? "production" : "development")));

// ルーターへのパス
app.use("/", require("./routes/index.js"));

console.log("Node ポート番号:3000 起動 ========== ");
app.listen(3000);
