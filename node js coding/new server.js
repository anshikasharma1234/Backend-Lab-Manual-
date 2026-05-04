const http = require ('http');
const serv= http.createServer((request,response)=>{
    console.log(request);
    response.end("Welcome to new server node js");
});
serv.listen(4000,'localhost',(err)=>{
    if(err)console.log("error");
    console.log("server is listening on http://localhost:4000");
});