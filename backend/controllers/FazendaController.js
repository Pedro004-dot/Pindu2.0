const express = require("express");
const FazendaModel = require("../models/fazenda");

const router = express.Router();


// router.post("/criar", async(req,res)=>{
    
//     const {car} = req.body;

//     if (await FazendaModel.findOne({car})){
//         return res.status(200).json({
//             message: "Fazenda já existe"
//         })
//     }

//     const fazenda = await FazendaModel.create(req.body)

//     return res.status(200).json({
//         fazenda,
//         message: "Fazenda criada"
//     })
// })
router.post("/criar", async (req, res) => {
    try {
      const { car } = req.body;
  
      // Verifica se a fazenda já existe no banco de dados
      const existingFazenda = await FazendaModel.findOne({ car });
  
      if (existingFazenda) {
        return res.status(200).json({
          message: "Fazenda já existe",
          fazenda: existingFazenda,
        });
      }
  
      // Se a fazenda não existe, cria uma nova
      const fazenda = await FazendaModel.create(req.body);
  
      return res.status(200).json({
        fazenda,
        message: "Fazenda criada",
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  });
  

router.get("/consultar", async(req,res)=>{
    try{
       const fazendas = await FazendaModel.find({})
       if (fazendas.length == 0){
        return res.status(400).json({
            message:"Nao teve fazenda cadastradas"
        })
       }
       return res.status(200).json({
        fazendas
       })
    }catch(error){
        res.status(400).json({
            message: "Nao foi possível encontrar fazendas"
        })
    }
})

router.get("/consultar/:id",async(req,res)=>{

   try{
    const fazenda = await FazendaModel.findById(req.params.id);
    return res.status(200).json({
        fazenda
    })
   }catch(error){
    return res.status(400).json({
        message:"Fazenda nao encontrada"
    })
   }
}),

router.put("/editar/:id",async(req,res)=>{
    try{
        const { car, quantityMale, quantityFemale, nameFamer, location, totalArea, nativeVegetacionArea, pasture, annualProducition, capture, emission, score } = req.body;
        const fazendaEditada = await FazendaModel.findByIdAndUpdate(req.params.id,{
            car,
            quantityMale,
            quantityFemale,
            nameFamer,
            location,
            totalArea,
            nativeVegetacionArea,
            pasture,
            annualProducition,
            capture,
            emission,
            score,
          }, { new: true })
        res.status(200).json({
            message: "Fazenda editada",
            fazendaEditada
        });
    }catch(error){
        res.status(400).json(
            {message: "Nao foi possivel editar a fazenda "}
        )
    }
})
router.delete("/delete/:id", async(req,res)=>{
   try{
    const fazendaDeletada = await FazendaModel.findOneAndDelete(req.params.id)
    res.status(200).json({
        message: "Fazenda Deletada",
        fazendaDeletada
    })
   }catch(error){
    res.status(400).json({
        message:"Nao foi possivel deletar a fazenda"
    })
   }
})
module.exports = router;