import './macro.css'; 
import Header from "../../components/header/header";
import { useNavigate,useLocation } from 'react-router-dom'
import { useEffect } from 'react';

const Macro = () => {
  const navigate = useNavigate();
  
  
  const fazendas = [
    { id: 1, nome: 'Fazenda Água Branca I', tamanho: '450 ha', porte: '500', pindu: 'D', status: 'ANALISE PROCESSADA' },
    { id: 2, nome: 'Fazenda Roncador', tamanho: '984 ha', porte: '400', pindu: 'C', status: 'EM PROCESSAMENTO' },
    { id: 3, nome: 'Fazenda Nova Piratininga', tamanho: '984 ha', porte: '1100', pindu: 'C', status: 'EM PROCESSAMENTO' },
    { id: 4, nome: 'Fazenda São Marcelo', tamanho: '984 ha', porte: '380', pindu: 'B', status: 'EM PROCESSAMENTO' },
  ];
  const handleCardClick = (fazendaId) => {
    navigate(`/fazenda/${fazendaId}`);
  };

  
  return (
    <div>
    <Header tela={"Macro"} macro={"Macro"} consulta={"Consulta"}/>
    <div className='container-macro'>
      <h1>Consulta da Base de Fornecedores</h1>
      <div className="cards-container">
        {fazendas.map(fazenda => <Card key={fazenda.id} fazenda={fazenda} onCardClick={() => handleCardClick(fazenda.id)} />)}
      </div>
    </div>
    </div>
  );
};

const Card = ({ fazenda, onCardClick }) => {
  const { state } = useLocation();
  const car = state?.car; 
  const machoRebanho = state?.machoRebanho
  // const {car,machoRebanho} = location.state;
  useEffect(()=>{
    console.log(car,machoRebanho)
  },[])
 

  return (
    <div className="card" onClick={onCardClick}>
      <div className="card-header">
        <span className="fazenda-nome">{fazenda.nome}</span>
        <span className={`pindu-badge pindu-${fazenda.pindu}`}>{fazenda.pindu}</span>
      </div>
      <div className="card-body">
        <span>Tamanho: {fazenda.tamanho}</span>
        <span>Porte: {fazenda.porte}</span>
        <span className={`status-badge ${getStatusClass(fazenda.status)}`}>{fazenda.status}</span>
      
      </div>
    </div>
  );
};

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

export default Macro;
