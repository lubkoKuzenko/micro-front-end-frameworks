// const path = require("path");

module.exports = {
  // entry: "./src/index.js",
  // output: {
  //   path: path.join(__dirname, "/dist"),
  //   filename: "index_bundle.js"
  // },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/pligin-transform-runtime"]
          }
        }
      }
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // }
    ]
  }
};
