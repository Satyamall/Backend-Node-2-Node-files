
const path=require('path');
const fs=require('fs');

fs.readFile(path.join(__dirname,'hello.txt'),"utf8",(err,data)=>{
    if(err){
        console.log("Error",err);
        return;
    }
    console.log(data);
})

// * readFile with synchronous code

console.log("readFile with synchronous code")
const data=fs.readFileSync(path.join(__dirname,'hello.txt'),"utf8");
console.log("sync output: ",data);

