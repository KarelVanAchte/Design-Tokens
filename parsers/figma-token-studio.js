const fs = require('fs');
const path = require('path');
const transformDesignTokens = require('./transformDesignTokens');

const inputFilePath = path.join(__dirname, '../tokens/tokens.json');
const outputFilePath = path.join(__dirname, '../tokens/parsed/figma-token-studio/tokens.json');

// Load your original design tokens JSON file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) throw err;
  const designTokensJson = JSON.parse(data);
  const modifiedJson = transformDesignTokens(designTokensJson, true);

  // Write the modified JSON to a new file
  fs.writeFile(outputFilePath, JSON.stringify(modifiedJson, null, 2), (err) => {
    if (err) throw err;
    console.log('Figma Token Studio tokens saved');
  });
});