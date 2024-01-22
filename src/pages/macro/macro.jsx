import './macro.css'; 
import Header from "../../components/header/header";
import { useContext } from 'react';
import FazendaContext from '../../context/fazendaContext';
import Card from '../../components/card/card';



const Macro = () => {
  const fazendas = useContext(FazendaContext)

  
  return (
    <div>
    <Header tela={"Macro"} macro={"Macro"} consulta={"Consulta"}/>
    <div className='container-macro'>
      <h1>Consulta da Base de Fornecedores</h1>
      <div className="cards-container">
       
        {/* {fazendas.map(fazenda => <Card key={fazenda.id} fazenda={fazenda} onCardClick={() => handleCardClick(fazenda.id)} />)} */}
      </div>
    </div>
    </div>
  );
};


 



export default Macro;
{/* <div className="fazendas">

</div> */}

// const car = state?.car
// const machoRebanho = state?.machoRebanho
// const id = state?.id
// const femeaRebanho = state?.femeaRebanho
// const status = state?.status
// const Card = ({ fazenda, onCardClick }) => {
//   const { state } = useLocation();
//   const car = state?.car; 
//   const machoRebanho = state?.machoRebanho
//   // const {car,machoRebanho} = location.state;

//   // useEffect(()=>{
//   //   console.log(car,machoRebanho)
//   // },[])