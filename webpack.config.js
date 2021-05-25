const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    port: 3000,
  },
  plugins: [new HTMLWebpackPlugin({ template: "./src/index.html" })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|svg|png)$/,
        use: "file-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
    ],
  },
};
