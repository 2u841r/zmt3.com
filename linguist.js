// const linguist = require('linguist-js');

import linguist from 'linguist-js'

// Analyse folder on disc
const folder = './src';
const options = { keepVendored: false, quick: false };
const { files, languages, unknown } = await linguist(folder, options);
console.log(languages)
// const {results} = languages; 

function calculatePercentages(data) {
    const totalBytes = data.bytes;
    const percentages = [];
  
    for (const [key, value] of Object.entries(data.results)) {
        const color = value.color;
      const percentage = (value.bytes / totalBytes * 100).toFixed(1);
      percentages.push({ color: value.color, language: key, percentage: parseFloat(percentage)});
    }
  
    return percentages.sort((a, b) => b.percentage - a.percentage);
  }
  
  const percentages = calculatePercentages(languages);
  percentages.forEach(({ color, language, percentage }) => {
    console.log(`${color} ${language}: ${percentage}%`);
  });


// // Analyse file content from raw input
// const fileNames = ['file1.ts', 'file2.ts', 'ignoreme.js'];
// const fileContent = ['#!/usr/bin/env node', 'console.log("Example");', '"ignored"'];
// const options = { ignoredFiles: ['ignore*'] };
// const { files, languages, unknown } = await linguist(fileNames, { fileContent, ...options });