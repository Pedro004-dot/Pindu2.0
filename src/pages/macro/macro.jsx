import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function Macro(){
    const location = useLocation();
    const formData = location.state?.formData;
    useEffect(() => {
        if (formData) {
           console.log("Dados do formulário:", formData);
        }
       }, [formData]);   
    
return(
    <div className='container'>
    <Header tela={"Macro"} macro={"Macro"} consulta={"Consulta"}/>
        <h1>Macro</h1>
        <Link to='/consulta'>Consultar</Link>
    </div>
)
}
