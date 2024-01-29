const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // entry point of build
  mode: "development",
  devServer: {
      watchFiles: ["src/**/*"],
      historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"]
      }, 
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ["url-loader"]
      }, 
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
        components: path.resolve(__dirname, "src/components/"),
        pages: path.resolve(__dirname, "src/pages/"),
        resources: path.resolve(__dirname, "src/resources/"),
        styles: path.resolve(__dirname, "src/styles/")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
};