const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;

const prodConfig = {
  mode: "production",
  output: {
    publicPath: "/auth/latest/",
    filename: "[name].[contenthash].js"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AppAuthIndex": "./src/main"
      },
      shared: { ...deps }
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
