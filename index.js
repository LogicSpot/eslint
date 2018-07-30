module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
        "classes": true,
        "experimentalObjectRestSpread": true,
        "impliedStrict": true,
        "jsx": true
    },
    "ecmaVersion": 8
  },
  "rules": {
    "arrow-body-style": [
        2,
        "as-needed"
    ],
    "comma-dangle": 0,
    "consistent-return": 0,
    "max-len": 0,
    "no-param-reassign": [
        2,
        {
            "props": false
        }
    ],
    "no-undefined": 2,
    "no-unused-vars": [
        1
    ],
    "quotes": [
        2,
        "single",
        {
            "allowTemplateLiterals": true,
            "avoidEscape": true
        }
    ],
    "radix": 0
  }
}