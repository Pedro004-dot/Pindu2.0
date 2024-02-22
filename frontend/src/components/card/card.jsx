import PropTypes from 'prop-types';
import './card.css'
import './card'
import {api}from '../../services/service'

import { useEffect, useState } from 'react';

export default function Card({fazenda, onCardClick}){
   const [fazendas, setFazendas] = useState([])
   const handleCardClick = (fazendaId) => {
     navigate(`/fazenda/${fazendaId}`);
   };
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
            {console.log(fazendas)}
          {fazendas.length > 0 ? (
              fazendas.map((params) => (
                <div key={params._id} className="card" onClick={onCardClick}>
                    <div className='card-header'>
                      <div className="fazenda-nome">{params.car}</div>
                    </div>  
                <div className='card-body'>  
                  < div>Porte macho: {params.quantityMale}</div>
                  <div>Porte femea: {params.quantityFemale }</div>
                </div>        
                </div>
              ))
            ) : (
          <p>Nenhum dado encontrado.</p>
          )}

           </div>
        </div> 

    )
  // const getStatusClass = (status) => {
  //   switch (status) {
  //     case 'EM PROCESSAMENTO':
  //       return 'processing';
  //     case 'ANALISE PROCESSADA':
  //       return 'processed';
  //     default:
  //       return '';
  //   }
   }