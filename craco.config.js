const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  babel: {
    plugins: [
      [
        'babel-plugin-import',
        {
          libraryName: '@mui/material',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'core',
      ],
      [
        'babel-plugin-import',
        {
          libraryName: '@mui/icons-material',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'icons',
      ],
    ],
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                return `vendor.${packageName.replace('@', '')}`;
              },
              priority: 10,
            },
            mui: {
              test: /[\\/]node_modules[\\/]@mui[\\/]/,
              name: 'vendor.mui',
              priority: 20,
            },
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
              name: 'vendor.react',
              priority: 20,
            },
            styles: {
              name: 'styles',
              type: 'css/mini-extract',
              chunks: 'all',
              enforce: true,
            },
          },
        },
        runtimeChunk: false,
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.info'],
                passes: 2,
              },
              mangle: true,
            },
          }),
          new CssMinimizerPlugin({
            minimizerOptions: {
              preset: [
                'default',
                {
                  discardComments: { removeAll: true },
                  normalizeWhitespace: true,
                },
              ],
            },
          }),
        ],
      };

      if (process.env.NODE_ENV === 'production') {
        webpackConfig.plugins.push(
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 8192,
            minRatio: 0.8,
          })
        );
      }

      return webpackConfig;
    },
  },
};
