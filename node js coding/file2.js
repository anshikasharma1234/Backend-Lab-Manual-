const fs = require("fs");

// write
let fd = fs.openSync("backend.txt", "w");
fs.writeSync(fd, "Hello, my name is Anshika");
fs.closeSync(fd);

fd = fs.openSync("backend.txt", "r");
const buffer = Buffer.alloc(50);
const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);

console.log(buffer.toString("utf8", 0, bytesRead));
fs.closeSync(fd);
