module.exports = ({ config }) => {
  // support src
  // const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
  // config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];

  // load source for storysource
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' }
      }
    ],
    enforce: 'pre'
  });

  config.resolve.extensions.push('.ts', '.tsx', '.css', '.scss', '.mdx', '.md');
  return config;
};
