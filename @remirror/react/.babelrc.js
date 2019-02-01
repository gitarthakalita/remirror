const defaultConfig = require('../../config/base.babel');

module.exports = {
  ...defaultConfig,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          node: '8',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [...defaultConfig.plugins],
};
