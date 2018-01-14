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
      "react/jsx-filename-extension": 0
    },
    "env": {
      "browser": true,
      "node": true
    }
};
