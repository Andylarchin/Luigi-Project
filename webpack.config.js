const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/luigi-config/luigi-config.es6.js',
  output: {
    filename: 'luigi-config.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'node_modules/@luigi-project/plugin-auth-oidc/plugin.js',
        to: 'assets/auth-oidc',
      },
      {
        from: 'node_modules/@luigi-project/plugin-auth-oidc/plugin-ie11.js',
        to: 'assets/auth-oidc',
      },
      {
        from: 'node_modules/@luigi-project/plugin-auth-oidc/silent-callback.html',
        to: 'assets/auth-oidc',
      },
      {
        from: 'node_modules/oidc-client/dist/oidc-client.min.js',
        to: 'assets/auth-oidc',
      },
    ]),
  ],
};
