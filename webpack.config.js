module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // Attaches STLBinaryExporter to global THREE
        test: require.resolve('three/examples/js/exporters/STLBinaryExporter'),
        use: 'imports-loader?THREE=../../..',
      },
    ],
  }
};
