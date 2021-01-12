const config = require("../gulp.config.js");
const gulp = require("gulp");
const del = require("del");
const input_images_dir = "./images/**/*";
const output_images_dir = "./images";


// ファイル名とタスク名は一緒にしておくと管理しやすい
gulp.task("copy-images.clean", ()=>{
    console.log("古い画像のクリア");
    return del(input_images_dir, {cwd: config.path.output});
});

// 画像ファイルのコピー実行
gulp.task("copy-images.excute", ()=>{
    console.log("画像のコピー");
    console.log(config.path.input);
    return gulp.src(input_images_dir, {cwd: config.path.input}).pipe(gulp.dest(output_images_dir, {cwd: config.path.output})); // pipeされたものをファイルに書き出す処理
});


// 画像のコピー
gulp.task("copy-images", gulp.series("copy-images.clean", "copy-images.excute"));
