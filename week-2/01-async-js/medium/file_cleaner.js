const fs = require("fs");


let fileData;

fs.readFile('a.txt', 'w+', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    fileData = data;
});

fs.writeFile('a.txt', fileData, 'w',)