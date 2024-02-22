import PropTypes from 'prop-types';
import './card.css'
import './card'
import {api}from '../../services/service'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Link } from 'react-router-dom';
import Button from '../button/button';


export default function Card({params}){
   const navigate = useNavigate() 
   const [fazendas, setFazendas] = useState([])
   useEffect(()=>{
    loadFazendas()
   },[])

   async function loadFazendas(){
    try{
      const response = await api.get("fazenda/consultar")
      setFazendas(response.data.fazendas)
    }catch (error){
      console.log(error.message)
    }
   }

  
   

    return (
        <div>
          <div className="cards-container">
          {fazendas.length > 0 ? (
              fazendas.map((params) => (
                <div 
                key={params._id}
                 className="card"               
                 >
                    <div className='card-header' >
                      <div className="fazenda-nome">{params.car}</div>
                    </div>  
                <div className='card-body'>  
                  < div>Porte macho: {params.quantityMale}</div>
                  <div>Porte femea: {params.quantityFemale }</div>
                  <Link to={ `/macro/${params._id}`} > <Button text={"Clique aqui "}/></Link>
                </div>        
                </div>
              ))
            ) : (
          <p>Nenhum dado encontrado.</p>
          )}

           </div>
        </div> 

    )
   }