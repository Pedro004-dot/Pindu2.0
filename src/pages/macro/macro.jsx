import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// export default function Macro(){
//     const location = useLocation();
//     const formData = location.state?.formData;
//     useEffect(() => {
//         if (formData) {
//            console.log("Dados do formulário:", formData);
//         }
//        }, [formData]);   
    


import React from 'react';
import './macro.css'; 

const Macro = () => {
  const fazendas = [
    { nome: 'Fazenda Água Branca I', tamanho: '450 ha', porte: '500',pindu: 'D', status: 'ANALISE PROCESSADA' },
    { nome: 'Fazenda Roncador', tamanho: '984 ha', porte: '400', pindu:'C',status: 'EM PROCESSAMENTO' },
  ];
  const handleRowClick = (fazendaId) => {
    history.push(`/fazenda/${fazendaId}`);
  };
  const getStatusClass = (status) => {
    switch (status) {
      case 'EM PROCESSAMENTO':
        return 'processing';
      case 'ANALISE PROCESSADA':
        return 'active';
      default:
        return '';
    }
  };

  return (
    <div>
     <div className='container'>
     <Header tela={"Macro"} macro={"Macro"} consulta={"Consulta"}/>
     </div>
    <div className="App">
      <header >
        <h1>Consulta da Base de Fornecedores</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Nome da Propriedade</th>
            <th>Tamanho (ha)</th>
            <th>Porte</th>
            <th>Score Pindu</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {fazendas.map((fazenda) => (
        <tr key={fazenda.id} onClick={() => handleRowClick(fazenda.id)}>
        <td>{fazenda.nome}</td>
        <td>{fazenda.tamanho}</td>
        <td>{fazenda.pindu}</td>
        <td>{fazenda.porte}</td>
        <td className={getStatusClass(fazenda.status)}>{fazenda.status}</td>
        </tr>
        ))}
    </tbody>
    </table>
    </div>
    </div>
);
};

export default Macro
