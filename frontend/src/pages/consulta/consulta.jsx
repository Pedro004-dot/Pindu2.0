import Button from "../../components/button/button";
import InputText from "../../components/input-text/inputText";
import './consulta.css'
import Header from "../../components/header/header";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function Consulta(){
  // const navigate = useNavigate()  
  // const [fazendas,setFazendas] = useState([])
  const [car,setCar] = useState('')
  const [machoRebanho,setMachoRebanho] = useState()
  const [femeaRebanho,setFemeaRebanho] = useState()

  // const [fazendas,setFazendas] = useState(()=>{
  //   const storedFazendas = localStorage.getItem("Pindu_lib")
  //   if(!storedFazendas) return []
  //   return JSON.parse(storedFazendas)
  // })
  // function addFazenda  ({car,machoRebanho,femeaRebanho}){
  //   const id = Math.floor(Math.random() *10000)
  //   const fazenda = {id,car , machoRebanho, femeaRebanho}
  //   setFazendas(state => {
  //     const newState =  [...state,fazenda]
  //     localStorage.setItem("Pindu_lib", JSON.stringify(newState))
  //     console.log('fazenda adicionada')
  //     return newState
  //    })
  //  }
   

  // funcao de remover fazenda 
  // const removeFazenda = (id)=>{

  //   setFazendas(state => {
  //     const newState = state.filter(fazenda => fazenda.id !== id)
  //     localStorage.setItem("Pindu_lib", JSON.stringify(newState))
  //     return newState
  //   })
  // }
  
  const handleSubmit= (ev)=>{
    ev.preventDefault()
    // addFazenda({car,machoRebanho,femeaRebanho})
    setCar('')
    setFemeaRebanho()
    setMachoRebanho()

  }

    return(
      
        <div className='container'>
              <Header tela={"Consulta"} macro={"Macro"} consulta={"Consulta"}/>
              <div className='content'>
                <div className="superior">
                <div className='icon'>
                  <img src='frontend/src/assets/search.png'/>
                </div>
                 <div className='form'>
                   <p>
                   Consulte os dados da propriedade inserindo CAR <br /> do fornecedor e   dados do rebanho comprado.
                   <br/>
                   <br/>
                   <br/>
                   </p>
                   <InputText type={'text'} text={'CAR'} value={car} onChange={e=> setCar(e.target.value)} required={true}/>
                   <InputText type={'text'} text={'Quantidade de macho'} value={machoRebanho} onChange={e=> setMachoRebanho(e.target.value)} required={true}/>
                   <InputText type={'text'} text={'Quantidade de femea'} value={femeaRebanho} onChange={e=> setFemeaRebanho(e.target.value)} required={true}/>
                   <Button onClick={handleSubmit}  submit={'submit'} text={'Solicitar analise'}/>
                 </div> 
                </div>            
              </div>   
         </div>
    
      
                       
    )
}



