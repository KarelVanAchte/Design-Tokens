const StyleDictionary = require('style-dictionary').extend({
    source: ['tokens/parsed/style-dictionary/tokens.json'],
    platforms: {
      css: {
        transformGroup: 'web',
        buildPath: 'build/',
        files: [{
          destination: 'variables.css',
          format: 'css/variables',
          filter: (token) => {
            return !token.name.startsWith('core-colors');
          }
        }]
      },
      scss: {
        transformGroup: 'scss',
        buildPath: 'build/',
        files: [{
          destination: '_variables.scss',
          format: 'scss/variables',
          filter: (token) => {
            return !token.name.startsWith('core-colors');
          }
        }]
      }
    }
  });
  
  StyleDictionary.buildAllPlatforms();