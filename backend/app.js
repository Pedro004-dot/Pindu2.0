const express = require("express")
const cors = require("cors")
const coon = require("./db/coon")
const AuthController = require("./controllers/AuthController")


const app = express()

app.use(cors())

app.use(express.json())

//DB connection

coon()

//Routes


app.use("/auth",AuthController)

app.listen(3000, function(){
    console.log('Servidor online')
})
;