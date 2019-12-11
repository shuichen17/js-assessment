module.exports = {
    "extends": "airbnb-base",
    "env": {
        "es6": true,
        "browser": true,
        "mocha": true
    },
    "globals": {
        "expect": true,
        "arraysAnswers": true,
        "flowControlAnswers": true,
        "functionsAnswers": true,
        "logicalOperatorsAnswers": true,
        "recursionAnswers": true,
        "stringsAnswers": true,
        "sinon": true,
    },
    "rules": {
        "linebreak-style": 0,
        "no-unused-expressions": 0,
        "chai-friendly/no-unused-expressions": 2,
        "no-plusplus": 'off',
        "vars-on-top": 'off',
        "operator-assignment": ["error", "never"],
        "no-param-reassign": ["error", { "props": false }],
       
    },
    "plugins": [
        "chai-friendly"
    ]

};
