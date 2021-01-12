/**
 * viewを返却するモジュール
 */
const router = require("express").Router();

router.get("/", (req, res)=>{
    console.log("./index 画面起動 ");
    res.render("./index.ejs");
});

module.exports = router;