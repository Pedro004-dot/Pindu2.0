import Button from "../../components/button/button";
import InputText from "../../components/input-text/inputText";
import './consulta.css'
import Header from "../../components/header/header";
import { useState } from "react";
import FazendaContext from "../../context/fazendaContext";
import { Children } from "react";

export default function DadComponent({children}){
    const [fazendas,setFazendas] = useState(()=>{
        const storedFazendas = localStorage.getItem("Pindu_lib")
        if(!storedFazendas) return []
        return JSON.parse(storedFazendas)
      })
      // const [fazendas,setFazendas] = useState([])
      const [car,setCar] = useState('')
      const [machoRebanho,setMachoRebanho] = useState()
      const [femeaRebanho,setFemeaRebanho] = useState()
    
      const addFazenda = ({car,machoRebanho,femeaRebanho})=>{
        const id = Math.floor(Math.random() *10000)
        const fazenda = {id,car , machoRebanho, femeaRebanho}
        setFazendas(state => {
         const newState =  [...state,fazenda]
         localStorage.setItem("Pindu_lib", JSON.stringify(newState))
         console.log('fazenda adicionada')
         return newState
        })
      }
      const handleSubmit= (ev)=>{
        ev.preventDefault()
        addFazenda({car,machoRebanho,femeaRebanho})
        setCar('')
        setFemeaRebanho()
        setMachoRebanho()
    
      }
    return(
        <FazendaContext.Provider>
             {children}
        </FazendaContext.Provider>
       
    )
}