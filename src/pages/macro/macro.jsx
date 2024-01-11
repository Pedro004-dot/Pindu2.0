import Header from "../../components/header/header";
import { Link } from "react-router-dom";

export default function Macro(){
    
return(
    <div className='container'>
    <Header tela={"Macro"} macro={"Macro"} consulta={"Consulta"}/>
        <h1>Macro</h1>
        <Link to='/consulta'>Consultar</Link>
    </div>
)
}
