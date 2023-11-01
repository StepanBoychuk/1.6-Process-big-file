const fs = require('fs');
const m = new Map()

const stream = fs.createReadStream('free_company_dataset.csv');

stream.on('error', error => console.error(error));
stream.on('data', chunk => m.set(chunk));
stream.on('end', () => console.log('End'));