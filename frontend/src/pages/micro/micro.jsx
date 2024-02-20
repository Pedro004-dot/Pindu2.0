import Header from '../../components/header/header';
import './micro.css'
export default function Micro(){

    const fazenda = {
        id: '1',
        nome: 'Fazenda Vale do Sol',
        produtor: 'Elias Augusto Polakiewicz',
        localizacao: 'Sorriso, MT',
        areaTotal: '2500 ha',
        vegetacaoNativa: '1750 ha',
        pastagem: '700 ha',
        producaoAnual: '120 cabeças',
        balanco: {
          captura: ' 875,8 tCO2',
          emissao: '1682,6 tCO2',
          score: 'D',
          detalheScore: '1,79 tCO2e/ Animal'
        },
        mapaUrl: 'url-para-imagem-do-mapa' 
      };
    
          
    
      return (
        <div>
        <Header tela={"Micro"} macro={"Macro"} consulta={"Consulta"}/>
        <div className="fazenda-page-container">
          <div className="fazenda-header">
            <h1>{fazenda.nome}</h1>
          </div>
          <div className="fazenda-map">
            {/*COLOCA MAPA AQUI */}
            <img src={fazenda.mapaUrl} alt="Mapa da Fazenda" />
          </div>
          <div className="fazenda-content">
          <table className="fazenda-info">
            <tbody>
              <tr>
                <td className="info-title">Produtor</td>
                <td className="info-content">{fazenda.produtor}</td>
              </tr>
              <tr>
                <td className="info-title">Localização</td>
                <td className="info-content">{fazenda.localizacao}</td>
              </tr>
              <tr>
                <td className="info-title">Área total</td>
                <td className="info-content">{fazenda.areaTotal}</td>
              </tr>
              <tr>
                <td className="info-title">Vegetação nativa</td>
                <td className="info-content">{fazenda.vegetacaoNativa}</td>
              </tr>
              <tr>
                <td className="info-title">Pastagem</td>
                <td className="info-content">{fazenda.pastagem}</td>
              </tr>
              <tr>
                <td className="info-title">Produção Anual</td>
                <td className="info-content">{fazenda.producaoAnual}</td>
              </tr>
            </tbody>
          </table>
          <div className="fazenda-balance">
            <div className="balance-caption">Captura</div>
            <div className="balance-value">{fazenda.balanco.captura}</div>
            <div className="balance-caption">Emissões</div>
            <div className="balance-value">{fazenda.balanco.emissao}</div>
            <div className="balance-caption">Score</div>
            <div className="score-container">
              <div className="score">{fazenda.balanco.score}</div>
              <div className="score-detail">{fazenda.balanco.detalheScore}</div>
            </div>
            </div>
      </div>
    </div>
    </div>
  );
}

// import './micro.css'
// // import { useParams } from "react-router-dom";
// import PropTypes from 'prop-types';

// Micro.propTypes = {
//    id : PropTypes.number,
//    name: PropTypes.string,
//    produtor: PropTypes.string,
//    localizacao: PropTypes.string,
//    areaTotal: PropTypes.number,
//    vegetacaoNativa: PropTypes.number,
//    pastagem: PropTypes.number,
//    producaoAnual: PropTypes.number,
//    captura: PropTypes.number,
//    emissao: PropTypes.number,
//    score: PropTypes.string,
//    detalheScore: PropTypes.string,
//    mapaUrl: PropTypes.string,
// }
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


      
