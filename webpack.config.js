var path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
    mode: "development", // whether we're building for dev or prod
    entry: "./code.ts", // which file to begin with
    resolve: {
      extensions: [".ts", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` extension will be handled by `ts-loader`
        { test: /\.ts$/, loader: "ts-loader" }
      ]
    },
    output: {
      path: path.resolve(__dirname, "distribution"), // what folder to put bundle in
      filename: "bundle.js" // what name to use for bundle
    }, 
    devServer: {
      contentBase: path.join(__dirname, "distribution"), // the root for the server
      watchContentBase: true, // so we reload if other stuff like CSS changes
      port: 9000, // it'll now be at http://localhost:9000
    },
    plugins: [
      new WebpackNotifierPlugin({alwaysNotify: true}),
    ]
  };