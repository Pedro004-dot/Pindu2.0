const mongoose = require("mongoose")
   
const bcrypt = require("bcryptjs")


 const  UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required:true,
        unique:true
    },
    email : {
        type : String,
        required:true,
        unique:true
    },
    password : {
        type: String,
        required : true,
        select: false,
    },
    createdAt :{
        type: Date,
        default: Date.now
    }
});

UserSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
})

const User = mongoose.model("User", UserSchema);

module.exports = User;