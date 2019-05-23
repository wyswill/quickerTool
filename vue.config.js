module: {
  rules: [
    {
      test: /\.less$/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { importLoaders: 1 } },
        "less-loader"
      ]
    }
  ];
}
