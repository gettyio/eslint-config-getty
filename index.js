module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  "env": {
    "node": true,
    "es6": true,
    "commonjs": true,
    "mocha": true
  },
  "plugins": [
    "flowtype"
    "jsx-a11y",
    "flowtype"
  ],
  "rules": {
    "arrow-body-style": 0,
    "padded-blocks": 0,
    "comma-dangle": 0,
    "react/jsx-boolean-value": 0,
    "max-len": [2, 200],
    "no-underscore-dangle": ["error", { "allow": ["_id", "__v"] }],
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      "arrow-body-style": 0,
      "padded-blocks": 0,
      "comma-dangle": 0,
      "react/jsx-boolean-value": 0,
      "max-len": [2, 200],
      "no-use-before-define": 0,
      "react/sort-comp": 0,
      "no-shadow": 0,
      "dot-notation": 0,
      "no-underscore-dangle": 0,
      "import/no-unresolved": 0,
      "flowtype/boolean-style": [ 2, "boolean" ],
      "flowtype/define-flow-type": 1,
      "flowtype/delimiter-dangle": [ 2, "never" ],
      "flowtype/generic-spacing": [ 2, "never" ],
      "flowtype/no-primitive-constructor-types": 2,
      "flowtype/no-weak-types": 2,
      "flowtype/object-type-delimiter": [ 2,  "comma" ],
      "flowtype/require-parameter-type": 2,
      "flowtype/require-return-type": [ 2,  "always", { "annotateUndefined": "never" } ],
      "flowtype/require-valid-file-annotation": [ 2, "always", { "annotationStyle": "line" }],
      "flowtype/semi": [ 2,  "always" ],
      "flowtype/space-after-type-colon": [ 2,  "always" ],
      "flowtype/space-before-generic-bracket": [ 2, "never" ],
      "flowtype/space-before-type-colon": [ 2, "never" ],
      "flowtype/type-id-match": [ 2, "^([A-Z][a-z0-9]+)+Type$" ],
      "flowtype/union-intersection-spacing": [ 2, "always" ],
      "flowtype/use-flow-type": 1,
      "flowtype/valid-syntax": 1
    }
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  }
}
