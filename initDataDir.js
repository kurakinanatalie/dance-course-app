const fs = require('fs');
const path = require('path');

const dbFiles = [
    'courses.db',
    'classes.db',
    'bookings.db',
    'organisers.db'
  ];

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
    console.log('Created ./data directory (initDataDir.js)');
  } else {
    console.log('./data directory already exists');
  }

  dbFiles.forEach(file => {
    const filePath = path.join(dataDir, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '', { encoding: 'utf8' });
      console.log(`Created empty ${file}`);
    }
  });

// const dataPath = path.join(__dirname, 'data');
// if (!fs.existsSync(dataPath)) {
//   fs.mkdirSync(dataPath);
//   console.log('Created ./data directory');
// }