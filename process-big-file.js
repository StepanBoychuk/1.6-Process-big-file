const fs = require('fs');

try {
    const fileContent = fs.readFileSync('free_company_dataset.csv');
}catch(error) {
    console.error(error);
}
