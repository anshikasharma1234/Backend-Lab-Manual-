const fs = require('fs');
const fd = fs.openSync("temp","w+");
const write = fs.writeSync(fd,"we are jgcbsajb ksghikb vh ");
const read = fs.readSync(fd,"utf-8");
console.log(write);