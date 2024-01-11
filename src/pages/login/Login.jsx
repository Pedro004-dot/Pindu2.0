
import { Link } from 'react-router-dom'
import Button from '../../components/button/button'
import InputText from '../../components/input-text/inputText'
import './Login.css'
import Header from '../../components/header/header'
import { useState } from 'react'

function initialState(){
  return {user:"", password:""}
}

export default function Login(){

  const [values,setValues] = useState(initialState)

    function onChange(event){
      setValues({
        ...values,
        [name]:values,
      })
    }
return(

    <div className='container'>
    <Header />
       <div className='content'>
         <div className='icon' >
           <img src='src/assets/Icone-usuario-Png.webp'/>
           <h3> Acesso ao usuario</h3>
         </div>
          <div className='login' >
           <InputText id='user' type='text' text='User' onChange={onChange} value={values.user}/>
           <InputText id='senha' type='password' text='Senha' onChange={onChange} value={values.password}/>
           <Button text={'Login'}  />
           <Link to='/consulta'>Consultar</Link>
           
          </div>
       </div>
      
    </div>
)
}
