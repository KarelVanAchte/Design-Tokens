const StyleDictionary = require('style-dictionary').extend({
    source: ['tokens/parsed/style-dictionary/tokens.json'],
    platforms: {
      scss: {
        transformGroup: 'web',
        buildPath: 'build/',
        files: [{
          destination: 'variables.css',
          format: 'css/variables'
        }]
      }
    }
  });
  
  StyleDictionary.buildAllPlatforms();