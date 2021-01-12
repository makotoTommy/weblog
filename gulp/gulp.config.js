// Gulpのconfig設定ファイル
let NODE_ENV = (process.env.NODE_ENV || "").trim();
let IS_DEVELOPMENT = "";

if(NODE_ENV === "prod" || NODE_ENV === "production"){
    NODE_ENV = "production";
}else{
    NODE_ENV = "development";
    IS_DEVELOPMENT = "dev";
}


module.exports = {
    env: {
        NODE_ENV,
        IS_DEVELOPMENT
    },
    // gulpfile.jsからの相対パス
    path: {
        root: "./", 
        log: "./log",
        node_modules: "./node_modules",
        input: "./public/source",       // 入力フォルダ
        output: `./public/${NODE_ENV}`   // 出力フォルダ
    },
    sass:{
        // 開発モードなら展開した状態(詰めない)でリリースモードなら詰めた状態
        outputStyle: IS_DEVELOPMENT === "dev" ? "expanded" : "compressed"
    },
    uglify:{

    }
};