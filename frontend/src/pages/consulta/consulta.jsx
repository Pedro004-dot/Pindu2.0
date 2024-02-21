import Button from "../../components/button/button";
import InputText from "../../components/input-text/inputText";
import './consulta.css'
import Header from "../../components/header/header";
import { useState} from "react";
import { api } from "../../services/service";
// import { useNavigate } from "react-router-dom";

export default function Consulta(){
  
  const [car,setCar] = useState('')
  const [machoRebanho,setMachoRebanho] = useState()
  const [femeaRebanho,setFemeaRebanho] = useState()
  
   const handleSubmit= async(ev)=>{
    ev.preventDefault()
    if (!( car || machoRebanho || femeaRebanho) )return;

    const response = await api.post("fazenda/criar",{
      car : car,
      quantityMale : machoRebanho,
      quantityFemale : femeaRebanho
    })
    console.log(response.data.fazendas)

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
                   <form onSubmit={handleSubmit}>
                    <InputText type={'text'} text={'CAR'} value={car} onChange={e=> setCar(e.target.value)} required={true}/>
                    <InputText type={'text'} text={'Quantidade de macho'} value={machoRebanho} onChange={e=> setMachoRebanho(e.target.value)} required={true}/>
                    <InputText type={'text'} text={'Quantidade de femea'} value={femeaRebanho} onChange={e=> setFemeaRebanho(e.target.value)} required={true}/>
                    <Button  submit={'submit'} text={'Solicitar analise'}/>
                   </form>
                 </div> 
                </div>            
              </div>   
         </div>
    
      
                       
    )
}



