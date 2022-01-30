
const path = require('path');
const fs = require('fs');

// * makeDir and renameFile and place it inside a folder 

fs.mkdir(path.join(__dirname, 'meta'), err => {
    if (err) {
        console.log("Error", err)
        return
    }
    fs.rename(path.join(__dirname, 'name.txt'), path.join(__dirname, 'meta', 'name.txt'), (err) => {
        if (err) {
            console.log(err)
            return;
        }
        else {
            console.log("File renamed")
        }
    })
})

// *Sync

// * renameFile with synchronous code

fs.mkdirSync(path.join(__dirname, 'metaSync'), err => {
    if (err) {
        console.log("Error", err)
        return
    }
    fs.renameSync(path.join(__dirname, 'nameSync.txt'), path.join(__dirname, 'metaSync', 'nameSync.txt'), (err) => {
        if (err) {
            console.log(err)
            return;
        }
        else {
            console.log("File renamed")
        }
    })
})