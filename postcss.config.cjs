/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("flex-gap-polyfill"),
    require("postcss-aspect-ratio-property"),
    require("postcss-flexbugs-fixes"),
    [
      require("postcss-preset-env"),
      {
        stage: 3,
        autoprefixer: {
          flexbox: "no-2009",
        },
        features: {
          "nesting-rules": true,
        },
      },
    ],
  ],
};
