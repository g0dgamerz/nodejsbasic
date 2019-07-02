const http = require('http');
const fs= require('fs');


const server=http.createServer((req,res)=>{
    // console.log(req.url);
    // res.write('server is ok');
    // res.end();
  if(req.url === '/'){
      res.writeHead(200,{'Content-Type' : 'text/html'})
      fs.readFile('./index.html','utf-8',(err,data)=>{
        if(err) throw err;
    if(data) console.log(data);
    else console.log('empty file');
    res.write(data);
    res.end();
})
   
  }
  if(req.url === '/contact'){
      res.write('this is contact page');
      res.end();
  }
})

server.listen(3000,() => console.log('server is up and running'));