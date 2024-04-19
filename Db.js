const mongoose = require('mongoose');
const URI = "mongodb+srv://rp1378265:rp1378265@cluster0.qsmfexr.mongodb.net/myDB"
const DB = ()=>{
    mongoose.connect(URI).then(()=>{
        console.log('your mongodb Connected ');
    }).
     catch((err)=>console.log("Db Connection Failed "+err))
    
     
}
module.exports = DB;