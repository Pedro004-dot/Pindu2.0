// import mongoose from "mongoose";
const mongoose = require("mongoose")
 async function main(){
    try{
    mongoose.set("strictQuery",true)
        await mongoose.connect(
            "mongodb+srv://pedrotorrezani6565:Pindu2023@cluster0.gqgfdw6.mongodb.net/?retryWrites=true&w=majority"          
        )
        console.log("Conectado ao banco ")
    } catch(error){ 
        console.log(`Erro:${error}`)
    }
}
mongoose.Promise = global.Promisse;

module.exports = main;