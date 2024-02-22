
import './macro.css'; 
import Header from "../../components/header/header";
// import { useNavigate } from 'react-router-dom'
import {api}from '../../services/service'
import { useEffect, useState } from 'react';
import Card from '../../components/card/card.jsx';


export default function Macro () {
return (
       <div>
      <Header tela={"Macro"} macro={"Macro"} consulta={"Consulta"}/>
     <div className='container-macro'>
       <h1>Consulta da Base de Fornecedores</h1>
       <Card></Card>
     </div>
     </div>
);
}
