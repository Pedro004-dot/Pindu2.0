
import './macro.css'; 
import Header from "../../components/header/header";
// import { useNavigate } from 'react-router-dom'
import {api}from '../../services/service'
import { useEffect, useState } from 'react';



export default function Macro () {
  // const navigate = useNavigate();
  const [fazendas,setFazendas] = useState([])

  useEffect(()=>{
    loadFazendas()
  },[])

  async function loadFazendas(){

   try {
    const response = await api.get("fazenda/consultar")
    setFazendas(response.data.fazendas)
    // console.log(response.data)
   } catch (error) {
    console.log(error.message)
   }
  }
return (
     <div> 
       <Header tela={"Macro"} macro={"Macro"} consulta={"Consulta"}/>
        <div className='container-macro'>
          <h1>Consulta da Base de Fornecedores</h1>
          <div className="cards-container">
          {console.log(fazendas)}
          {fazendas.length > 0 ? (
              fazendas.map((params) => (
                <div key={params._id}>
                      <h1>{params.car}</h1>
                      <h2>{params.quantityMale}</h2>
                      <h2>{params.quantityFemale}</h2>
                </div>
              ))
            ) : (
          <p>Nenhum dado encontrado.</p>
          )}
           </div>
        </div>
     </div>
);
}

// import './macro.css'; 
// import Header from "../../components/header/header";
// import { useNavigate } from 'react-router-dom'

// const Macro = () => {
//   const navigate = useNavigate();
//   const fazendas = [
//     { id: 1, nome: 'Fazenda Água Branca I', tamanho: '450 ha', porte: '500', pindu: 'D', status: 'ANALISE PROCESSADA' },
//     { id: 2, nome: 'Fazenda Roncador', tamanho: '984 ha', porte: '400', pindu: 'C', status: 'EM PROCESSAMENTO' },
//     { id: 3, nome: 'Fazenda Nova Piratininga', tamanho: '984 ha', porte: '1100', pindu: 'C', status: 'EM PROCESSAMENTO' },
//     { id: 4, nome: 'Fazenda São Marcelo', tamanho: '984 ha', porte: '380', pindu: 'B', status: 'EM PROCESSAMENTO' },
//   ];
//   const handleCardClick = (fazendaId) => {
//     navigate(`/fazenda/${fazendaId}`);
//   };

//   return (
//     <div>
//     <Header tela={"Macro"} macro={"Macro"} consulta={"Consulta"}/>
//     <div className='container-macro'>
//       <h1>Consulta da Base de Fornecedores</h1>
//       <div className="cards-container">
//         {fazendas.map(fazenda => <Card key={fazenda.id} fazenda={fazenda} onCardClick={() => handleCardClick(fazenda.id)} />)}
//       </div>
//     </div>
//     </div>
//   );
// };

// const Card = ({ fazenda, onCardClick }) => {
//   return (
//     <div className="card" onClick={onCardClick}>
//       <div className="card-header">
//         <span className="fazenda-nome">{fazenda.nome}</span>
//         <span className={`pindu-badge pindu-${fazenda.pindu}`}>{fazenda.pindu}</span>
//       </div>
//       <div className="card-body">
//         <span>Tamanho: {fazenda.tamanho}</span>
//         <span>Porte: {fazenda.porte}</span>
//         <span className={`status-badge ${getStatusClass(fazenda.status)}`}>{fazenda.status}</span>
//       </div>
//     </div>
//   );
// };

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

// export default Macro;