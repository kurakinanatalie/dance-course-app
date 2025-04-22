const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data');
if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath);
  console.log('Created ./data directory');
}