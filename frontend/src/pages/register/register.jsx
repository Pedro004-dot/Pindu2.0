import { useState } from "react";
import Button from "../../components/button/button";
import InputText from "../../components/input-text/inputText";
import Header from "../../components/header/header";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import {api}from '../../services/service'

export default function Register() {
    const[data,setData] = useState(null)
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email,setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
          const response = await api.post("auth/register",{
            name: user,
            email: email,
            password: password
    
          })
          toast.success("Usuario cadastrado com sucesso")
          setData(response.data)
          // localStorage.setItem('token',JSON.stringify(data.token))
          navigate('/consulta'); 
         }catch(error){toast.error("Usuario ja existe")}   
      }

 return (
    <div className='container'>
    <Header tela={"Register"} />
       <div className='content'>
         <div className='icon' >
           <img src='frontend/src/assets/people.png'/>
           <h3> Registro de usuario</h3>
         </div>
          <div className='login' >
            <form onSubmit={handleSubmit} >
              <InputText id="user" type="text" text="User" value={user} onChange={(e) => setUser(e.target.value)} required={true} />
              <InputText id="email" type="text" text="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
              <InputText id="senha" type="password" text="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
              <Button submit={'submit'} text={"Registrar"}/>  
           </form>
            <div>
            <p>Ja tem uma conta ? <span onClick={()=> navigate("/register")} >Clique aqui</span></p>
            </div>
          </div>
       </div>
      
    </div>
 );
}