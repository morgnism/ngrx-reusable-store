const Dotenv = require("dotenv-webpack");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            plugins: () => [require("tailwindcss"), require("autoprefixer")],
          },
        },
      },
    ],
  },
  plugins: [new Dotenv()],
};
