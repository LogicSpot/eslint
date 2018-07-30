module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
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
  "plugins": [
    "prettier"
  ],
  "rules": {
    "arrow-body-style": [
        "as-needed",
        2
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
    "prettier/prettier": [
        "error",
        {
            "printWidth": 120,
            "singleQuote": true,
            "trailingComma": "es5"
        }
    ],
    "quotes": [
        "single",
        2,
        {
            "allowTemplateLiterals": true,
            "avoidEscape": true
        }
    ],
    "radix": 0,
    "react/display-name": 1,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/react-in-jsx-scope": 0
  }
}