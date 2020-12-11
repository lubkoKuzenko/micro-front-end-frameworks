const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    publicPath: "/container/latest/",
    filename: "[name].[contenthash].js"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        appMarketing: `marketing@${domain}/marketing/remoteEntry.js`
      },
      shared: { ...deps }
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
