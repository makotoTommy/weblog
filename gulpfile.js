const config = require("./gulp/gulp.config.js");
const gulp = require("gulp");
const load = require("require-dir");

// 複数ファイルを読み込む処理(再帰的に読み込む)
load("./gulp/tasks",{recurse: true});


// gulp.task("default", (cb)=>{
//     console.log(process.env.NODE_ENV);
//     cb(); // 明示的に終了を通知
// });
let dev = [
    "copy-third_party",
    "copy-images",
    "copy-javascripts",
    "compile-sass"
];

let prod = [
    "copy-third_party",
    "copy-images",
    "minify-javascripts",
    "compile-sass"
];

// sassのコンパイル
gulp.task("default", gulp.series(config.env.IS_DEVELOPMENT ? dev : prod));