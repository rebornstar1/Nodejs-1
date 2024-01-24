/* const os = require('os');

// Info about the user
const user = os.userInfo();
console.log(user);

// System Time 

console.log(`The System Uptime is ${require('os').uptime()} Seconds`)

// Current Operating System

const CurrentOS = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(CurrentOS); */

/* const path = require('path')

console.log(path.sep)

// Join the File Path

const filepath = path.join('/Content','Subfolder','test.txt')

const base = path.basename(filepath);
console.log(base)

const absolute = path.resolve(__dirname,'Content','Subfolder','test.txt')
console.log(absolute) */

// File System Modules

/* const {readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt','utf8');
writeFileSync('./content/second.txt','She will be very Successful ')
// Such kind of writesync will overwrite

writeFileSync('./content/second.txt','Credit of which goes to him',{flag : 'a'})
// To append at the end of the files

const second = readFileSync('./content/second.txt','utf-8')
console.log(first,second) */


// Now doing the same with Asynchronous

// Complete this by yourself

/* const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    const first  = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
        const second = result;
        writeFile('./content/first.txt',`The Important Task is ${first} and the Casual Taks is ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
}) */

// Async Await is more preferable to use

//HTTP Modules

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/' ){
        res.end('Welcome to the Home Page')
    }
    if(req.url == '/about'){
        res.end('Here is our Short History')
    }
    if(req.url == '/contactus'){
        res.end('Contact Us and Share your reviews')
    }
    res.end(
         `<h1>Oops! 404 Page Not Found</h1>
         <a href="/">Back To Home Page</a>`   
    )
})

server.listen(5000)