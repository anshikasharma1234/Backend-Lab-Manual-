// const http = require ('http');
// const serv= http.createServer((request,response)=>{
//     console.log(request);
//     response.end("Welcome to erver node js");
// });
// serv.listen(8000,'localhost',(err)=>{
//     if(err)console.log(err)
//     console.log("server is listening on http://localhost:8000");
// });

//method changing

// const fs = require('fs');
// const http = require ('http')

//  http.createServer((request,response)=>{
//     console.log(request);
//     const Date=new Date();
//     fs.appendFile("log.txt",'${Date}:New request recorded\n',(err)=>{
//         if(err)console.log(err);
//     });
//     response.setHeader("access-control-allow-origin","*")
//     response.write("server started successfully")
//     response.end();
// }).listen(3000,'localhost',()=>{

//     console.log("server is listening on http://localhost:3000");
// });

// const URL = require('url');
// const adress= 'http://www.example.com/category/search?name';
// const myURL = URL.parse(adress, true);
// console.log(myURL);

// general routres
// home=/
// about us 
// contact 
// services
// seperate html page for all routes
// for non exsisted page 
// displays 404 page not found button return to home page 
// maintain log file for all (successful file or not)
// use path module 

const fs= require('fs');
const http = require('http');
const path = require('path');

const server=http.cresteServer((res,req) =>{
    console.log(request)
})