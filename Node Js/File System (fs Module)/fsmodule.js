const fs = require('fs')


// sync/async opreation 

// 1.CREATE FILE

// 📌 જો ફાઈલ હોય → overwrite
// 📌 ન હોય → નવી ફાઈલ બને


// fs.writeFileSync('abc.txt',"this is syncronus file create",'utf-8')

// fs.writeFile('abc.txt','this is Asyncronus file created','utf-8',(err)=>{
//     if(err) console.log(err)
// })


// 2.READ FILE 

// let data = fs.readFileSync('abc.txt','utf-8')
// console.log(data)

//  fs.readFile('abc.txt','utf-8',(err,data)=>{
//     if(err){
//         // throw err
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// })


// 3.UPDATE FILE 


// fs.appendFileSync('abc.txt','\nNew Data Add...','utf-8')

// fs.appendFile('abc.txt','\nData Add Async','utf-8',(err)=>{
//  if(err){
//     console.log(err)
//  }else{
//     console.log("File Create")
//  }
// })

// 4.DELETE FILE 

// fs.unlinkSync('abc.txt')
// console.log("file deleted")

// fs.unlink('abc.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })




// fs.watch('./abc.txt', (eventType, filename) => {

//     const time = new Date().toLocaleTimeString('en-IN', {
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//       hour12: true
//     });
//   if (filename) {
//     console.log(`${filename} => ${eventType} =>${time}`);
//   }
// });

fs.mkdir('myFolder', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Folder created successfully');
  }
});