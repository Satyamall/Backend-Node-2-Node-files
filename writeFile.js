

const path = require('path');
const fs = require('fs');

fs.writeFile(path.join(__dirname, 'name.txt'), "Satya Prakash Mall", (err) => {
    if (err) {
        console.log("Error", err);
        return;
    }
    console.log("File Created");
})


// * Sync

//* writeFile with synchronous code

fs.writeFileSync(path.join(__dirname, 'nameSync.txt'), "Satya Prakash Mall", (err) => {
    if (err) {
        console.log("Error", err);
        return;
    }
    console.log("File Created");
})

