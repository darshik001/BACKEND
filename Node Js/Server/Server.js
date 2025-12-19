const http = require('http')
const fs =  require('fs')

const port = 8001
const server  = http.createServer((req,res)=>{
 let filepath;
  switch (req.url) {
    case '/':
        filepath = './Home.html'
        break;
     case '/about':
        filepath = './About.html'
        break;
     case '/contact':
        filepath = './contact.html'
        break;    
    default:
        filepath = './NoFound.html'
        break;
  }
     let data = fs.readFileSync(filepath,'utf-8')
     res.write(data)
     res.end()
})

server.listen(8000,(err)=>{
  if(err) console.log(err)
    else console.log("http://localhost:8000")
})


// fs.open('../test.js',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("open file")
//     }
// })


// const data = fs.readFileSync('../abc.js','utf-8')
// console.log(data)


