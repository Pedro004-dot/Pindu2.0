import Header from "../../components/header/header";
import './micro.css'
 const Micro= () => {

 const fazenda = {
    id: '1',
    nome: 'Fazenda Água Branca I',
    produtor: 'Elias Augusto Polakiewicz',
    localizacao: 'Sorriso, MT',
    areaTotal: '2500 ha',
    vegetacaoNativa: '1750 ha',
    pastagem: '700 ha',
    producaoAnual: '450 cabeças',
    balanco: {
      captura: '-12.438 tCO2',
      emissao: '12.179 tCO2',
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
};

export default Micro;
