import Button from "../../components/button/button";
import InputText from "../../components/input-text/inputText";
import './consulta.css'
import Header from "../../components/header/header";
import { useState } from "react";
import Card from "../../components/card/card";
import { useNavigate } from "react-router-dom";

export default function Consulta(){
  const navigate = useNavigate()  
  // const [fazendas,setFazendas] = useState([])
  const [car,setCar] = useState('')
  const [machoRebanho,setMachoRebanho] = useState()
  const [femeaRebanho,setFemeaRebanho] = useState()

  const [fazendas,setFazendas] = useState(()=>{
    const storedFazendas = localStorage.getItem("Pindu_lib")
    if(!storedFazendas) return []
    return JSON.parse(storedFazendas)
  })
  function addFazenda  ({car,machoRebanho,femeaRebanho}){
    const id = Math.floor(Math.random() *10000)
    const fazenda = {id,car , machoRebanho, femeaRebanho}
    setFazendas(state => {
      const newState =  [...state,fazenda]
      localStorage.setItem("Pindu_lib", JSON.stringify(newState))
      console.log('fazenda adicionada')
      return newState
     })
   }
   function handleCardClick() {
    navigate('/micro');    
}

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
    addFazenda({car,machoRebanho,femeaRebanho})
    setCar('')
    setFemeaRebanho()
    setMachoRebanho()

  }
const ativo = [
    { id: 1, car: '01', machoRebanho: 50, femeaRebanho: 60, status: 'ANALISE PROCESSADA' },
];
    return(
      
        <div className='container'>
              <Header tela={"Consulta"} macro={"Macro"} consulta={"Consulta"}/>
              <div className='content'>
                <div className="superior">
                <div className='icon'>
                  <img src='src/assets/search.png'/>
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
                <div onClick={handleCardClick}>
            {ativo.map(fazenda => (
                <Card 
                onCardClick={handleCardClick}
                key={fazenda.id}
                    car={fazenda.car}
                    machoRebanho={fazenda.machoRebanho}
                    femeaRebanho={fazenda.femeaRebanho}
                    status={fazenda.status}
                />
            ))}
        </div>
                <div className="cards">
                    {fazendas ? fazendas.map((fazenda)=> (
                   <Card
                     key={fazenda.id}
                     car={fazenda.car}
                      machoRebanho={fazenda.machoRebanho}
                      femeaRebanho={fazenda.femeaRebanho}
                      status={'EM PROCESSAMENTO'}
                      />

                    
   
                    )) : <h1>Nao tem fazendas registradas</h1>}
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
// import Button from "../../components/button/button";
// import InputText from "../../components/input-text/inputText";
// import './consulta.css'
// import Header from "../../components/header/header";
// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';

// export default function Consulta(){
  
//   const [fazendas,setFazendas] = useState([])
//   const [car,setCar] = useState('')
//   const [machoRebanho,setMachoRebanho] = useState('')
//   const [femeaRebanho,setFemeaRebanho] = useState('')
//   const navigate = useNavigate();


//   function handleSubmit(){
//     const data = {
//       car, machoRebanho, femeaRebanho
//     }
//     id+=1
//     console.log(data)
//     navigate('/macro',{ state: { id : id , car : car , machoRebanho: machoRebanho, femeaRebanho:femeaRebanho, status : 'Em processamento'}})
//   }
  
//     return(
//             <div className='container'>
//               <Header tela={"Consulta"} macro={"Macro"} consulta={"Consulta"}/>
//               <div className='content'>
//                 <div className='icon' >
//                   <img src='src/assets/search.png'/>
//                 </div>
//                  <div className='login' >
//                    <p>
//                    Consulte os dados da propriedade inserindo CAR <br /> do fornecedor e   dados do rebanho comprado.
//                    <br/>
//                    <br/>
//                    <br/>
//                    </p>
//                  <InputText type={'text'} text={'CAR'} value={car} onChange={e=> setCar(e.target.value)} required={true}/>
//                  <InputText type={'text'} text={'Quantidade de macho'} value={machoRebanho} onChange={e=> setMachoRebanho(e.target.value)} required={true}/>
//                  <InputText type={'text'} text={'Quantidade de femea'} value={femeaRebanho} onChange={e=> setFemeaRebanho(e.target.value)} required={true}/>
//                  <Button onClick={handleSubmit} text={'Solicitar analise'}/>
//                 </div>
//              </div>   
//             </div>           
//     )
// }
// {/* <form  >
// <InputText type='text' text='CAR' required={true}  onChange={(e) => setCar(e.target.value)} value={car}/>
// <InputText  name="machoRebanho" type='number' text='Quantidade de fêmea' required={true}  onChange={(e) => setMachoRebanho(e.target.value)} value={machoRebanho}/>
// <InputText  name="femeaRebanho" type='number' text='Quantidade de macho' required={true} onChange={(e) => setFemeaRebanho(e.target.value)} value={femeaRebanho} />
// {/* <InputText id='document' type='file' text=''  placeHolder={"DOcumento de venda"} required={false}/> */}
// {/* <Button onClick={handleSubmit} text={'Solicitar Análise'}  />  
// </form> */} 
// {/* <div className='fazendas'>
// {fazendas ? fazendas.map((fazenda)=> (
//  <Card
//                key={fazenda.id}
//                car={fazenda.car}
//                machoRebanho={fazenda.machoRebanho}
//                femeaRebanho={fazenda.femeaRebanho}                
//   />

// )) : <h1>Nao tem fazendas registradas</h1>}
// </div> */}