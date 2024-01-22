import PropTypes from 'prop-types';
import './card.css'
Card.propTypes = {
    car : PropTypes.string,
    machoRebanho : PropTypes.number,
    femeaRebanho : PropTypes.number,
    
  }
export default function Card({ car,machoRebanho,femeaRebanho }){
   

    return (
      <div className="card" >
        <div className="card-header">
          <span className="fazenda-nome">{car}</span>
          {/* <span className={`pindu-badge pindu-${fazenda.pindu}`}>{fazenda.pindu}</span> */}
        </div>
        <div className="card-body">
          {/* <span>Tamanho: {fazenda.tamanho}</span> */}
          <span>Porte: {machoRebanho+ femeaRebanho}</span>
          {/* <span className={`status-badge ${getStatusClass(fazenda.status)}`}>{fazenda.status}</span> */}
        </div>
      </div>
    );
  }

  // const getStatusClass = (status) => {
  //   switch (status) {
  //     case 'EM PROCESSAMENTO':
  //       return 'processing';
  //     case 'ANALISE PROCESSADA':
  //       return 'processed';
  //     default:
  //       return '';
  //   }
  // };