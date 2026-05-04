const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express');
});
app.get('/about', (req, res) => {
  res.send('Hello about');
});
app.get('/contact', (req, res) => {
  res.send('Hello contact');
});
app.get('/search', (req, res) => {
  const data=req.query.name;
    console.log(req.query.name);
    if(!data){
        res.send("Please provide a search query");
    }
    else{
  res.send(`<h1>search result found</h1> ${req.query.name}
    <a href='/about'>Click here about page</a>`);
  }
});
app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
  
});
