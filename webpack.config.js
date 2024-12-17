module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules/, // Prevent warnings for third-party libraries
      },
    ],
  },
  stats: {
    warningsFilter: /source-map-loader/,
  },
};
