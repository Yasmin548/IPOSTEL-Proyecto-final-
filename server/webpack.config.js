const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server.ts", 
  target: "node",
  externals: [nodeExternals()], 
  mode: process.env.NODE_ENV || "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};