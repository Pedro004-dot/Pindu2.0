import { useState ,useEffect} from 'react';
import './header.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Header.propTypes = {
   tela: PropTypes.string,
   macro :PropTypes.string,
   consulta :PropTypes.string,

}
export default function Header({tela,macro,consulta,ADM}){

    const [macroEstilo,setMacroEstilo]= useState({})
    const [consultaEstilo,setConsultaEstilo]= useState({})
    const [admEstilo,setAdmEstilo]= useState({})

    const handleSubTitle = ()=>{
        if(tela === 'Consulta'){
           
            setMacroEstilo({})
            return  setConsultaEstilo({background: 'white', color: '#6B202B'})
        } else if(tela === 'Macro'){
            setConsultaEstilo({})
            return setMacroEstilo({background: 'white', color: '#6B202B'})
        }else if (tela=== 'Administração'){
            setAdmEstilo({})
            return setAdmEstilo({background: 'white', color: '#6B202B'})
        }
    return console.log('Feito')
    }

    
    useEffect(() => {
        handleSubTitle();
    }, [tela]);

    return(
       <div className='header'>
            <div className='esquerda'>
             <h1>Pindu</h1>
            </div>
            <div className='centro'>
              <h1>{tela} </h1>
              <img/>
            </div>
            <div className='direita'>
            <Link className='link' id='adm' style={admEstilo} to={"/adm"}> {ADM}</Link>
            <Link className='link' id='macro' style={macroEstilo} to={"/macro"}> {macro}</Link>
            <Link className='link' id='consulta' style={consultaEstilo} to={"/consulta"} >{consulta}</Link>
            </div>
       </div>
    )
}