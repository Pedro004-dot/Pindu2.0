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

router.get('/encontrar', async (req,res)=>{
   
    try{
        // const {name} = req.body
        let usuarios = await UserModel.find({}).select("+password")
        res.status(200).json(usuarios)
    }catch(error){
        res.status(400).send({
            message: "Nao foi possivel encontrar usuarios"
        })
    }
})

router.get('/encontrar/:id',async (req,res)=>{
    try{
        let usuario = await UserModel.findById(req.params.id);
        res.status(200).json(usuario)
    }catch(error){
        res.status(400).send({
            message: "Nao foi possivel encontrar o usuario"
        })
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        let deletado = await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Usuario excluido",
            deletado
        })
    }catch(error){
        res.status(400).send({
            message: "Nao foi possivel excluir usuario"
        })
    }
})

router.put('/editar/:id', async (req,res)=>{
    try{
        let {name} = req.body
        let editado = await UserModel.findByIdAndUpdate(req.params.id, {name},{new:true})
        res.status(200).json({
            message: "Usuario editado",
            editado
        })
    }catch(error){
        res.status(400).send({
            message: "Nao foi possivel editar usuario"
        })
    }
})


module.exports = router;