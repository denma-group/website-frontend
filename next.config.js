const webpack = require('webpack');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');

const sassConfig = {
  cssModules: false
};

const optimizedImagesConfig = {
  // these are the default values so you don't have to provide them if they are good enough for your use-case.
  // but you can overwrite them here with any valid value you want.
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  optimizeImages: true,
  optimizeImagesInDev: true,
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 3,
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  svgo: {
    // enable/disable svgo plugins here
  },
  webp: {
    preset: 'default',
    quality: 75,
  },
};

const nextConfiguration = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        PC: JSON.stringify('pc')
      })
    );
    return config;
  },
  target: 'serverless',
  publicRuntimeConfig: false
};

module.exports = withPlugins([
  [optimizedImages, optimizedImagesConfig],
  [withSass, sassConfig],
], nextConfiguration);
