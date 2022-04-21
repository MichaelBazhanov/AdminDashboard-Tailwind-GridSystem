const fs = require("fs");

module.exports = {
  syntax: "postcss-scss",
  parser: "postcss-scss",
  plugins: [
    require("postcss-easy-import")({
      extensions: ".pcss",
    }),
		require("postcss-nested"),
    require("autoprefixer")({
      cascade: false,
    }),
    require("postcss-advanced-variables"),
    require("tailwindcss"),
  ],
};