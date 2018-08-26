// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push(
    { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?limit=100000' },
    { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
    { test: /\.(ts|tsx)$/, loader: ['awesome-typescript-loader', 'react-docgen-typescript-loader']}
  );

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules.push('node_modules');

  return config;
};
