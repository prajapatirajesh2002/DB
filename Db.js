const mongoose = require('mongoose');
const URI =  "mongodb url"
const DB = ()=>{
    mongoose.connect(URI).then(()=>{
        console.log('your mongodb Connected ');
    }).
     catch((err)=>console.log("Db Connection Failed "+err))
    
     
}
module.exports = DB;
