const config = require("../gulp.config.js");
const gulp = require("gulp");
const del = require("del");
// const input_third_party_dir = "./jquery/dist/**/*";
// const output_third_party_dir = "./third_party/jquery";


// ファイル名とタスク名は一緒にしておくと管理しやすい
gulp.task("copy-third_party.clean", ()=>{
    console.log("古いサードパーティファイルのクリア");
    return del("./third_party/**/*", {cwd: config.path.output});
});

// ==============================================
// サードパーティファイルのコピー実行

// jQueryコピー
gulp.task("copy-third_party.jquery", ()=>{
    console.log("jQueryのコピー");
    return gulp.src("./jquery/dist/**/*", {cwd: config.path.node_modules})
        .pipe(gulp.dest("./third_party/jquery", {cwd: config.path.output})); // pipeされたものをファイルに書き出す処理
});

// popper.jsのコピー
gulp.task("copy-third_party.popper.js", ()=>{
    console.log("popper.jsのコピー");
    return gulp.src("./popper.js/dist/**/*", {cwd: config.path.node_modules})
        .pipe(gulp.dest("./third_party/popper", {cwd: config.path.output})); // pipeされたものをファイルに書き出す処理
});

// bootstrapのコピー
gulp.task("copy-third_party.bootstrap", ()=>{
    console.log("bootstrapのコピー");
    return gulp.src("./bootstrap/dist/**/*", {cwd: config.path.node_modules})
        .pipe(gulp.dest("./third_party/bootstrap", {cwd: config.path.output})); // pipeされたものをファイルに書き出す処理
});

// font-awesomeのコピー
gulp.task("copy-third_party.font-awesome", ()=>{
    console.log("font-awesomeのコピー");
    return gulp.src("./font-awesome/**/*", {cwd: config.path.node_modules})
        .pipe(gulp.dest("./third_party/font-awesome", {cwd: config.path.output})); // pipeされたものをファイルに書き出す処理
});


// サードパーティのコピーの実行
gulp.task("copy-third_party",gulp.series(
    "copy-third_party.clean",
    "copy-third_party.jquery",
    "copy-third_party.popper.js",
    "copy-third_party.bootstrap",
    "copy-third_party.font-awesome"
));
