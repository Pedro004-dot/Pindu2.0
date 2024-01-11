import Button from "../../components/button/button";
import InputText from "../../components/input-text/inputText";
import './consulta.css'
import Header from "../../components/header/header";

export default function Consulta(){
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
                  <InputText id='user' type='text' text='CAR' />
                  <InputText id='senha' type='text' text='Informações do rebanho' />
                  <Button text={'Buscar'}  />  
                </div>
             </div>   
            </div>           
    )
}