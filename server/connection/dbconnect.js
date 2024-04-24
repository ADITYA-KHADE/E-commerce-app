const mongoose = require('mongoose');
require('dotenv').config();
const connectdb = async ()=>{
    try{
        const connect=await mongoose.connect(process.env.connection_string,{
        });
        console.log("connected at:",
            connect.connection.host,
            connect.connection.name,
            );
    } 
    catch(err){
        console.log(err);
    }
}

module.exports = connectdb;

