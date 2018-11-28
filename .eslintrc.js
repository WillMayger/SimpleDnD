module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "linebreak-style": 'off',
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-underscore-dangle": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/media-has-caption": "off",
        "implicit-arrow-linebreak": "off",
        "react/forbid-prop-types": "off",
        "react/no-unescaped-entities": "off",
        "react/no-did-update-set-state": "off",
    },
    "globals": {
        "window": true,
        "document": true,
        "fetch": true,
        "Headers": true,
        "FormData": true,
        "Request": true,
        "it": true,
        "expect": true,
        "describe": true,
        "beforeEach": true,
        "afterEach": true,
    }
};
  