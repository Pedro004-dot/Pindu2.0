
import { useParams } from 'react-router';
import './micro.css'
import { api } from '../../services/service';
import { useEffect, useState } from 'react';
export default function Micro(){

    const {params_Id} = useParams()
    const [fazenda,setFazenda]= useState({})
   
    
    async function findFazenda(){
      try{
        const response = await api.get(`fazenda/consultar/${params_Id}`)
        console.log(response.data.fazenda)
        setFazenda(response.data.fazenda)
        
      }catch (error){
        console.log(error.message)
        return (
          <h2>Não foi possivel encontrar esta fazenda...</h2>
        )
      }
     }

     useEffect(()=>{
      findFazenda()
     },[])

      return (
        <div>
        {  
                <div 
                 className="card"                 
                 >
                    <div className='card-header' >
                      <div className="fazenda-nome">{fazenda.car}</div>
                    </div>  
                <div className='card-body'>  
                  <div>Porte macho: {fazenda.quantityMale}</div>
                  <div>Porte femea: {fazenda.quantityFemale }</div>
                </div>        
                </div>
             
            
          }
    </div>
  );
}

//  const Micro= ({name,produtor, localizacao,areaTotal,vegetacaoNativa,pastagem,producaoAnual,captura,emissao,score,detalheScore,mapaUrl}) => {
  
//     return (
//     <div>
//     <Header tela={"Micro"} macro={"Macro"} consulta={"Consulta"}/>
//     <div className="fazenda-page-container">
//       <div className="fazenda-header">
//         <h1>{name}</h1>
//       </div>
//       <div className="fazenda-map">
//         {/*COLOCA MAPA AQUI */}
//         <img src={mapaUrl} alt="Mapa da Fazenda" />
//       </div>
//       <div className="fazenda-content">
//       <table className="fazenda-info">
//         <tbody>
//           <tr>
//             <td className="info-title">Produtor</td>
//             <td className="info-content">{produtor}</td>
//           </tr>
//           <tr>
//             <td className="info-title">Localização</td>
//             <td className="info-content">{localizacao}</td>
//           </tr>
//           <tr>
//             <td className="info-title">Área total</td>
//             <td className="info-content">{areaTotal}</td>
//           </tr>
//           <tr>
//             <td className="info-title">Vegetação nativa</td>
//             <td className="info-content">{vegetacaoNativa}</td>
//           </tr>
//           <tr>
//             <td className="info-title">Pastagem</td>
//             <td className="info-content">{pastagem}</td>
//           </tr>
//           <tr>
//             <td className="info-title">Produção Anual</td>
//             <td className="info-content">{producaoAnual}</td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="fazenda-balance">
//         <div className="balance-caption">Captura</div>
//         <div className="balance-value">{captura}</div>
//         <div className="balance-caption">Emissões</div>
//         <div className="balance-value">{emissao}</div>
//         <div className="balance-caption">Score</div>
//         <div className="score-container">
//           <div className="score">{score}</div>
//           <div className="score-detail">{detalheScore}</div>
//         </div>
//       </div>
//       </div>
//     </div>
//     </div>
//   );
// };
// export default Micro;


      
