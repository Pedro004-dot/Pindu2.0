import PropTypes from 'prop-types';
import './card.css'
Card.propTypes = {
    car : PropTypes.string,
    machoRebanho : PropTypes.number,
    femeaRebanho : PropTypes.number,
    status : PropTypes.string,
    onCardClick: PropTypes.func
    
  }
export default function Card({ car,machoRebanho,femeaRebanho,status}){
   

    return (
      <div className = "card-container">
      <div className="card" >
        <div className="card-header" >
          <span className="fazenda-nome" > Fazenda: {car}</span>
          {/* <span className={`pindu-badge pindu-${fazenda.pindu}`}>{fazenda.pindu}</span> */}
        </div>
        <div className="card-body">
          {/* <span>Tamanho: {fazenda.tamanho}</span> */}
          <span>Porte: {parseInt(machoRebanho) + parseInt(femeaRebanho)}</span>
          <span className={`status-badge ${getStatusClass(status)}`}>{status}</span>
        </div>
      </div>
      </div>
    );
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'EM PROCESSAMENTO':
        return 'processing';
      case 'ANALISE PROCESSADA':
        return 'processed';
      default:
        return '';
    }
  };