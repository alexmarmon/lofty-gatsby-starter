module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
      "react",
      "jsx-a11y",
      "import"
    ],
    "rules": {
      "semi": [2, "never"],
      "react/jsx-filename-extension": 0,
      "react/prop-types": 0,
      "react/require-default-props": 0,
      "no-undef": 0,
      "no-unused-vars": 0,
      "jsx-a11y/anchor-is-valid": 0,
      "comma-dangle": 0,
      "no-console": 0,
      "react/no-unused-state": 0,
      "no-unused-expressions": 0,
      "max-len": 0
    },
    "env": {
      "browser": true,
      "node": true
    }
};
