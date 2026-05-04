const express = require('express');
const app = express();
const { connection } = require('./config/db.js');
const router = require('./routes/urlRoute.js');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connection('mongodb://127.0.0.1:27017/urlShortner')
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use('/url', router);

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});

