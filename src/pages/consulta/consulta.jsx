import Button from "../../components/button/button";
import InputText from "../../components/input-text/inputText";
import './consulta.css'
import Header from "../../components/header/header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Consulta(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
     car: "",
     macho_rebanho: "",
     femea_rebanho: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/macro", { state: { formData } });
 };


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
                  <form onSubmit={handleSubmit}>
                   <InputText id='car' type='text' text='CAR' required={true} value={formData.car} onChange={(e) => formData.car(e.target.value)}/>
                   <InputText id='macho_rebanho' type='number' text='Quantidade de fêmea' required={true}value={formData.macho_rebanho} onChange={(e) => formData.macho_rebanho(e.target.value)}/>
                   <InputText id='femea_rebanho' type='number' text='Quantidade de macho' required={true} value={formData.femea_rebanho} onChange={(e) => formData.femea_rebanho(e.target.value)}/>
                   {/* <InputText id='document' type='file' text=''  placeHolder={"DOcumento de venda"} required={false}/> */}
                   <Button text={'Solicitar Análise'}  />  
                  </form>
                </div>
             </div>   
            </div>           
    )
}