const express = require("express");
const bcrypt = require("bcryptjs")
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken")
const authConfig = require("../config/auth.json")
// const UserM = require("../models/user");


const router = express.Router();

const generateToken = ( user = {})=>{
    return jwt.sign({
        id : user.id,
        name : user.name
    },authConfig.secret , {
        expiresIn: 86400
    });
}


router.post("/register", async (req,res)=>{

    const {name} = req.body

    if(await UserModel.findOne({name})){
        return res.status(400).json({
            error:true,
            message: "Usuario ja existe"
        })
    }

    const user = await UserModel.create(req.body)

    user.password = undefined;
    
    return res.json({
        user,
        token : generateToken(user)
    })
})
//Verifica se existe usuario e se a senha esta correta 
router.post("/authenticate", async(req,res)=>{
    const {name,password} = req.body;

    const user =  await UserModel.findOne({name}).select("+password")
    //Confere email
    if(!user){
        return res.status(400).json({
            // error:true,
            message: 'Usuario nao encontrado'
        })
    }else(
        console.log("Usuario encontrado")
    )
    //Confrere senha
    if( !await bcrypt.compare(password, user.password)){
        return res.status(400).send({
            message:"Senha Invalida"
        })
    }

    user.password = undefined
    //Gerar Token
    

    return res.json({
        user,
        token : generateToken(user)
    })}
       
        
)

module.exports = router;