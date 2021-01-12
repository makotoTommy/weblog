var config = require("../gulp.config.js");
const gulp = require("gulp");
var del = require("del");

// ファイル名とタスク名は一緒にしておくと管理しやすい
gulp.task("clean-log", ()=>{
    // ログ削除
    console.log("ログ削除");
    return del("./**/*", {cwd: config.path.log});
});