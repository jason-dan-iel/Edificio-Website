const mongoose = require('mongoose')
require('dotenv/config')

// connecting the mongoose database 
const uri = process.env.DB_CONNECTION


const connect = ()=>{
    try{
        mongoose.set({'strictQuery': false})
        mongoose.connect(uri, () =>{
            console.log("db connected");
        })
    }catch(error){
        console.log(error);
    }
}

module.exports = connect