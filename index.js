module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "node": true,
    "es6": true,
    "commonjs": true,
    "mocha": true
  },
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
      "import/no-unresolved": 0
    }
  }
}
