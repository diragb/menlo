const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./src/yourfile.css",
    }),
  ],
};
