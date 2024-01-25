const express = require("express")
const cors = require("cors")
const coon = require("./db/coon")
const UserController = require("./controllers/UserController")
const FazendaController = require("./controllers/FazendaController")


const app = express()

app.use(cors())

app.use(express.json())

//DB connection

coon()

//Routes


app.use("/auth",UserController)
app.use("/fazenda",FazendaController)

app.listen(3000, function(){
    console.log('Servidor online')
})
;