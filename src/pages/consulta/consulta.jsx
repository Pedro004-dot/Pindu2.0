import Button from "../../components/button/button";
import InputText from "../../components/input-text/inputText";
import './consulta.css'
import Header from "../../components/header/header";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Consulta(){
  
  
  const [car,setCar] = useState('')
  const [machoRebanho,setMachoRebanho] = useState('')
  const [femeaRebanho,setFemeaRebanho] = useState('')
  const navigate = useNavigate();

  function handleSubmit(){
    const data = {
      car, machoRebanho, femeaRebanho
    }
    
    console.log(data)
    navigate('/macro',{ state: { car : car , machoRebanho: machoRebanho}})
  }
  
    return(
            <div className='container'>
              <Header tela={"Consulta"} macro={"Macro"} consulta={"Consulta"}/>
              <div className='content'>
                <div className='icon' >
                  <img src='src/assets/search.png'/>
                </div>
                 <div className='login' >
                   <p>
                   Consulte os dados da propriedade inserindo CAR <br /> do fornecedor e   dados do rebanho comprado.
                   <br/>
                   <br/>
                   <br/>
                   </p>
                 <InputText type={'text'} text={'CAR'} value={car} onChange={e=> setCar(e.target.value)} required={true}/>
                 <InputText type={'text'} text={'Quantidade de macho'} value={machoRebanho} onChange={e=> setMachoRebanho(e.target.value)} required={true}/>
                 <InputText type={'text'} text={'Quantidade de femea'} value={femeaRebanho} onChange={e=> setFemeaRebanho(e.target.value)} required={true}/>
                 <Button onClick={handleSubmit} text={'Solicitar analise'}/>
                </div>
             </div>   
            </div>           
    )
}
{/* <form  >
<InputText type='text' text='CAR' required={true}  onChange={(e) => setCar(e.target.value)} value={car}/>
<InputText  name="machoRebanho" type='number' text='Quantidade de fêmea' required={true}  onChange={(e) => setMachoRebanho(e.target.value)} value={machoRebanho}/>
<InputText  name="femeaRebanho" type='number' text='Quantidade de macho' required={true} onChange={(e) => setFemeaRebanho(e.target.value)} value={femeaRebanho} />
{/* <InputText id='document' type='file' text=''  placeHolder={"DOcumento de venda"} required={false}/> */}
{/* <Button onClick={handleSubmit} text={'Solicitar Análise'}  />  
</form> */} 