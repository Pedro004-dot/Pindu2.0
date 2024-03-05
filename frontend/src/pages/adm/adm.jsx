import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import {api}from '../../services/service'
import "./adm.css"

export default function Adm(){
const [users,setUsers] = useState([])
    const loadUsers = async ()=>{
        try{
            const response = await api.get("auth/encontrar")
            setUsers(response.data)
          }catch (error){
           console.log("Nao foram encontrado usuarios")
          }  
    }

useEffect(()=>{
       loadUsers()
},[])
    return(
        <div>
        <Header 
         tela={"Administração"}
         macro={"Macro"} 
         consulta={"Consulta"}
         ADM={"ADM"}
         />
          <h2>Usuarios </h2>
        <div
         className="container-adm" >
         
        {
           
            users.length > 0 ? (
                users.map((params) => (
                    <article
                    key={params._id}
                    className="users-container"
                    >
                    <div className="user-info">
                    <p>Nome: {params.name ? params.name : (<p>nao temos esta informacao </p>)}  </p>
                    <p>Email: {params.email ? params.email : (<p>nao temos esta informacao </p>)}</p>
                    </div>
            </article> 
                ))
            ) : (
          <p>Nenhum dado encontrado.</p>
          )
        }
           
        </div>
         </div>      
    )
}  
