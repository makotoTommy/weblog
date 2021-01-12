const config = require("../gulp.config.js");
const gulp = require("gulp");
const del = require("del");
const input_js_dir = "./js/**/*";
const output_js_dir = "./js";


// ファイル名とタスク名は一緒にしておくと管理しやすい
gulp.task("copy-javascripts.clean", ()=>{
    console.log("古いjavascriptファイルのクリア");
    return del(input_js_dir, {cwd: config.path.output});
});

// javascriptファイルのコピー実行
gulp.task("copy-javascripts.excute", ()=>{
    console.log("javascriptのコピー");
    return gulp.src(input_js_dir, {cwd: config.path.input}).pipe(gulp.dest(output_js_dir, {cwd: config.path.output})); // pipeされたものをファイルに書き出す処理
});


// javascriptのコピー
gulp.task("copy-javascripts", gulp.series("copy-javascripts.clean", "copy-javascripts.excute"));
