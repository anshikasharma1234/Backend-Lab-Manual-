const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let student = {
        name: 'Anshika',
        roll: 7,
        email: 'anshika18sharma123@gmail.com',
        age: 19
    };

    res.render('home', {student });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
