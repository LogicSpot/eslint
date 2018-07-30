module.export = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "classes": true,
            "experimentalObjectRestSpread": true,
            "impliedStrict": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-newline": "off",
        "array-bracket-spacing": [
            "off",
            "never"
        ],
        "array-callback-return": "error",
        "array-element-newline": "off",
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "arrow-parens": "off",
        "arrow-spacing": [
            "off",
            {
                "after": true,
                "before": true
            }
        ],
        "block-scoped-var": "error",
        "block-spacing": [
            "off",
            "always"
        ],
        "brace-style": [
            "off",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "callback-return": "warn",
        "camelcase": [
            "off",
            {
                "properties": "never"
            }
        ],
        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "comma-spacing": "off",
        "comma-style": [
            "error",
            "last"
        ],
        "complexity": "warn",
        "computed-property-spacing": [
            "off",
            "never"
        ],
        "consistent-return": "off",
        "consistent-this": "off",
        "curly": "off",
        "default-case": "error",
        "dot-location": "off",
        "dot-notation": [
            "error",
            {
                "allowKeywords": true
            }
        ],
        "eol-last": "off",
        "eqeqeq": "off",
        "for-direction": "error",
        "func-call-spacing": "error",
        "func-name-matching": "off",
        "func-names": "off",
        "func-style": "off",
        "function-paren-newline": "off",
        "generator-star-spacing": "off",
        "getter-return": "error",
        "global-require": "error",
        "guard-for-in": "off",
        "handle-callback-err": "off",
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "implicit-arrow-linebreak": [
            "off",
            "beside"
        ],
        "indent": "off",
        "indent-legacy": "off",
        "init-declarations": "off",
        "jsx-quotes": "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "line-comment-position": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-around-comment": "off",
        "lines-around-directive": "off",
        "lines-between-class-members": [
            "off",
            "always"
        ],
        "max-depth": "error",
        "max-len": "off",
        "max-lines": "off",
        "max-nested-callbacks": "error",
        "max-params": "error",
        "max-statements": "off",
        "max-statements-per-line": "off",
        "multiline-comment-style": [
            "off",
            "bare-block"
        ],
        "new-parens": "off",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-alert": "off",
        "no-array-constructor": "off",
        "no-await-in-loop": "error",
        "no-bitwise": "error",
        "no-buffer-constructor": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-confusing-arrow": "error",
        "no-console": [
            "warn",
            {
                "allow": [
                    "warn"
                ]
            }
        ],
        "no-continue": "off",
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "off",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-inner-declarations": [
            "error",
            "functions"
        ],
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "off",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-mixed-requires": "error",
        "no-multi-assign": "off",
        "no-multi-spaces": "off",
        "no-multi-str": "off",
        "no-multiple-empty-lines": "error",
        "no-native-reassign": "error",
        "no-negated-condition": "off",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "error",
        "no-new": "off",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        "no-path-concat": "error",
        "no-plusplus": "off",
        "no-process-env": "error",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "off",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "off",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "off",
        "no-sync": "error",
        "no-tabs": "off",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-undef": "off",
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-underscore-dangle": "off",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": [
            "error",
            {
                "defaultAssignment": true
            }
        ],
        "no-unused-expressions": "error",
        "no-unused-vars": "warn",
        "no-use-before-define": "off",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "off",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "off",
        "no-with": "error",
        "nonblock-statement-body-position": [
            "off",
            "any"
        ],
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "object-shorthand": "off",
        "one-var": "off",
        "one-var-declaration-per-line": "off",
        "operator-assignment": [
            "off",
            "never"
        ],
        "operator-linebreak": "off",
        "padded-blocks": "off",
        "padding-line-between-statements": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "off",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "off",
        "prefer-promise-reject-errors": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "error",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true,
                "avoidEscape": true
            }
        ],
        "radix": [
            "off",
            "as-needed"
        ],
        "require-await": "error",
        "require-jsdoc": "off",
        "rest-spread-spacing": "off",
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": [
            "off",
            {
                "after": true,
                "before": false
            }
        ],
        "semi-style": [
            "off",
            "last"
        ],
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "off",
        "space-unary-ops": "off",
        "spaced-comment": [
            "off",
            "always"
        ],
        "strict": "off",
        "switch-colon-spacing": "off",
        "symbol-description": "error",
        "template-curly-spacing": [
            "off",
            "never"
        ],
        "template-tag-spacing": "off",
        "unicode-bom": [
            "error",
            "never"
        ],
        "valid-jsdoc": "off",
        "vars-on-top": "off",
        "wrap-iife": "error",
        "wrap-regex": "error",
        "yield-star-spacing": "error",
        "yoda": [
            "off",
            "never"
        ]
    }
}