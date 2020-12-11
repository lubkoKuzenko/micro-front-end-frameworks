const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;

const prodConfig = {
  mode: "production",
  output: {
    publicPath: "/marketing/latest/",
    filename: "[name].[contenthash].js"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./AppMarketingIndex": "./src/main"
      },
      shared: { ...deps }
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
