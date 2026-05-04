const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Success");
});

app.get("/about", (req,res) => {
    res.send("about");
});

app.get("/contact", (req,res) => {
    res.send("contact");
});

app.get("/search", (req,res) => {
    console.log(req.query);
    if (!data)

    res.send("<h1>search result found </h1> ${req.query.name}
        <a href="/contact">Click here about the page</a>");
});


app.listen(8000, () => {
    console.log("http://localhost:8000");
});

const data=req.query.name;
data.get

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Success");
// });

// app.get("/home", (req, res) => {
//     res.send("Success");
// });

// app.get("/search", (req,res) => {
//     console.log(req.query);
//     res.send("result");
// })

// app.listen(8000, () => {
//     console.log("http://localhost:8000/search?id=1");
// });

