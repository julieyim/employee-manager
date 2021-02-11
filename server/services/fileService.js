/* 
       Read and Write File Utility
       commonjs modules     export require
       es module    export import
*/

const fs = require('fs')
const path = require('path')


exports.getFileContents = (filePath)=>{
   let fileContents = JSON.parse(fs.readFileSync(path.join(__dirname, filePath)))
   return fileContents
     
}

exports.writeFileContents = (filePath, data) =>{
    let fileContents = getFileContents(filePath)
    fileContents.push(data)
    fileContents = JSON.stringify(fileContents)
    fs.writeFileSync(path.join(__dirname, filePath), fileContents)
}


 