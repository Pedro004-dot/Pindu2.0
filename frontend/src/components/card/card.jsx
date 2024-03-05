import PropTypes from 'prop-types';
import './card.css'
import './card'
import {api}from '../../services/service'
import { MdOutlineDelete } from "react-icons/md";
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
     console.log("Nao possui fazendas cadastradas")
    }
   }


   async function deleteFazenda(id){
    try {
      const response = await api.delete(`fazenda/delete/${id}`)
      response ? console.log("Fazenda Apagada") : 
      console.log("Nao foi possivel apagar a fazenda") 
     
      const allFazendas = fazendas.filter((item)=> item._id !== id)
      setFazendas(allFazendas)
    }catch(error){
      console.log(error.message)
    }

   }
   
    return (
        <div>
          <div className="cards-container">
          {fazendas.length > 0 ? (
              fazendas.map((params) => (
                <article 
                key={params._id}
                 className="card"  
                           
                 >
                    <div className='card-header' >
                      <div className="fazenda-nome">{params.car}</div>
                    </div>  
                <div className='card-body'>  
                <div className='card-left'>
                <p  onClick={()=> navigate(`/macro/${params._id}`)}   > Porte macho:
                   {params.quantityMale} </p>      
                  <p>Porte femea:
                   {params.quantityFemale }</p> 
                  
                 </div>
                 <div className='card-right' >
                 <button 
                 >
                  <MdOutlineDelete 
                  size={20}
                  onClick={()=> deleteFazenda(params._id) }
                   />
                 </button>
                 
                 </div>

                </div>        
                </article>
              ))
            ) : (
          <p>Nenhum dado encontrado.</p>
          )}

           </div>
        </div> 

    )
   }