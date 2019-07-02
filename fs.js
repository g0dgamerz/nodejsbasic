const fs= require('fs');
// console.log('before the file');
// fs.writeFile('evening.txt','this group is food',(err)=> {
//  if(err) throw err;
//  console.log(`file has been written`);
// });

// console.log('after the file');

// fs.readFile('./evening.txt',"utf-8",(err,data)=>{
//     if(err) throw err;
//     if(data) console.log(data);
//     else console.log('empty file');
// });
fs.readFile('./index.html','utf-8',(err,data)=>{
        if(err) throw err;
    if(data) console.log(data);
    else console.log('empty file');
})