const http = require('http');
const fs = require('fs');


// const server = http.createServer((req,res)=>{
//     console.log("server")
// })


// server.listen(4000,()=>{
//     console.log("server created")
// });

let file = './text.txt';
let data = new Date().toLocaleString();
fs.writeFile(file,data,(err)=>{
    if(err){
        console.log("error writing file");
    }
})


