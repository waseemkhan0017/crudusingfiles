
const dataname="waseem";
console.log(dataname);

const fs = require('fs');
// fs.mkdirSync('waseem');
fs.writeFile('waseem/bio.txt','my name is waseem', (err)=>{
    console.log(err);
});//create file and write data in it
fs.appendFile('waseem/bio.txt','And im doing BSIT.', (err)=>{}); //append data in file
fs.readFile('waseem/bio.txt','utf-8',(err,data)=>{
    console.log(data);
}); //read data from file
fs.rename('waseem/bio.txt','waseem/mybio.txt',(err)=>{}); //rename file
fs.unlink('waseem/bio.txt',(err)=>{}); //delete file
