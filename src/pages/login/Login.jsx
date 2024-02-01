import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../../backend/services/authService';
import Button from '../../components/button/button';
import InputText from '../../components/input-text/inputText';
import Header from '../../components/header/header';
import './Login.css';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authData = await authenticate(user, password);
      localStorage.setItem('userToken', authData.token); 
      navigate('/consulta'); 
    } catch (error) {
      console.error('Erro de autenticação:', error.message);
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <div className='icon'>
          <img src='src/assets/people.png' alt='Ícone de Login'/>
          <h3> Acesso ao usuario</h3>
        </div>
        <div className='login'>
          <form onSubmit={handleSubmit}>
            <InputText id="user" type="text" text="User" value={user} onChange={(e) => setUser(e.target.value)} required={true} />
            <InputText id="senha" type="password" text="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
            <Button submit={'submit'} text={"Login"}/>
          </form>           
        </div>
      </div>
    </div>
  );
}
