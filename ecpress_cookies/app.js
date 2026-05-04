const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.get('/setcookie', (req, res) => {
    res.cookie("Uname", "SectionFC", {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false
    });
    res.send("message send Successfully");
});
app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000/setcookie");
});