var config = require("../gulp.config.js");
const gulp = require("gulp");
var del = require("del");
let uglify = require("gulp-uglify");

// ファイル名とタスク名は一緒にしておくと管理しやすい
gulp.task("minify-javascripts.clean", ()=>{
    // minify削除
    console.log("minify削除");
    return del("./js/**/*", {cwd: config.path.output});
});

gulp.task("minify-javascripts.excute", () => {
    return gulp.src("./js/**/*", {cwd: config.path.input})
        .pipe(uglify(config.uglify)) // uglifyの設定を指定    
        .pipe(gulp.dest("./js", {cwd: config.path.output}));
});

// uglifyのコンパイル
gulp.task("minify-javascripts", gulp.series("minify-javascripts.clean", "minify-javascripts.excute"));