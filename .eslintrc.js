module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4,
            {"SwitchCase": 2} // switch分のルール追加
        ],
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        // ルール追加
        "no-unused-vars":[
            "error",
            {
                "vars": "all",  // 変数は全てエラー
                "args": "none"  // 関数の引数は無視
            }
        ],
        // コンソールの有効化
        "no-console":[
            "off"
        ]
    }
};