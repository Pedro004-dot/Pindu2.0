



import Button from '../../components/button/button'
import InputText from '../../components/input-text/inputText'
import './Login.css'
import Header from '../../components/header/header'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {api}from '../../services/service'
import { toast } from 'react-toastify';



export default function Login(){
  const[data,setData] = useState(null)
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await api.post("auth/authenticate",{
        name: user,
        password: password

      })
      toast.success("Usuario cadastrado com sucesso")
      setData(response.data)
      // localStorage.setItem('token',JSON.stringify(data.token))
      console.log(data)
      console.log("Usuario verificado")
      navigate('/consulta'); 
     }catch(error){toast.error("Usuario invalido")}

    
  }
  


return(

    <div className='container'>
    <Header />
       <div className='content'>
         <div className='icon' >
           <img src='frontend/src/assets/people.png'/>
           <h3> Acesso ao usuario</h3>
         </div>
          <div className='login' >
            <form onSubmit={handleSubmit}>
              <InputText id="user" type="text" text="User" value={user} onChange={(e) => setUser(e.target.value)} required={true} />
              <InputText id="senha" type="password" text="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
              <Button submit={'submit'} text={"Login"}/>
             
           </form>
            
          </div>
       </div>
      
    </div>
  )
}
