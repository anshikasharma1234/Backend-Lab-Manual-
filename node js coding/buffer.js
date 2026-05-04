const fs = require('fs');

fs.writeFile("dummy.txt", "Hello Dummy !!!", (err) => {
  if (err) console.log(err);
  else console.log("File Created Successful");
});

fs.readFile("dummy.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  else {
    for (let ch of data) {
      console.log(ch);
    }
  }
});
else {
   for (let ch of data){
    console.log(ch);
}
}
});