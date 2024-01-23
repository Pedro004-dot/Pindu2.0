





import Button from '../../components/button/button'
import InputText from '../../components/input-text/inputText'
import './Login.css'
import Header from '../../components/header/header'
import { useState } from 'react';
// import Authenticate from '../../components/autenticador/authenticate'
// import Macro from "../macro/macro";
import {useNavigate} from 'react-router-dom'




export default function Login(){
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === 'adm' && password === 'adm') {
      localStorage.setItem('authenticatedUser', JSON.stringify({ user, password }));
      navigate('/consulta');
    } else {     
      console.log('nao autenticado')
      alert('Usuário ou senha incorretos!');
    }
};

return(

    <div className='container'>
    <Header />
       <div className='content'>
         <div className='icon' >
           <img src='src/assets/people.png'/>
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
// // text={isAuthenticated ? "autenticado" : 'Login'