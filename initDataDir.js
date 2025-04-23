const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
    console.log('Created ./data directory (initDataDir.js)');
  } else {
    console.log('./data directory already exists');
  }

// const dataPath = path.join(__dirname, 'data');
// if (!fs.existsSync(dataPath)) {
//   fs.mkdirSync(dataPath);
//   console.log('Created ./data directory');
// }