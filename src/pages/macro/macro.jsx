import './macro.css'; 
import Header from "../../components/header/header";
import './macro.css'; 
 

  
  
  
  const Macro = () => {
  
    
    return (
      <div>
      <Header tela={"Macro"} macro={"Macro"} consulta={"Consulta"}/>
      <div className='container-macro'>
        <h1>Consulta da Base de Fornecedores</h1>
        <div className="cards-container">
        
     
  
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