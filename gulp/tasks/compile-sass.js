var config = require("../gulp.config.js");
const gulp = require("gulp");
var del = require("del");
let sass = require("gulp-sass");

// ファイル名とタスク名は一緒にしておくと管理しやすい
gulp.task("compile-sass.clean", ()=>{
    // sass削除
    console.log("sass削除");
    return del("./css/**/*", {cwd: config.path.output});
});

gulp.task("compile-sass.excute", () => {
    return gulp.src("./css/**/*.scss", {cwd: config.path.input})
        .pipe(sass(config.sass)) // sassの設定を指定    
        .pipe(gulp.dest("./css", {cwd: config.path.output}));
});

// sassのコンパイル
gulp.task("compile-sass", gulp.series("compile-sass.clean", "compile-sass.excute"));