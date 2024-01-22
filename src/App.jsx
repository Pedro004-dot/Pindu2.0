
import { RouterProvider } from "react-router-dom"
import router from "./router"
import { useState } from "react"
import FazendaContext from "./context/fazendaContext"


// import connectDatabase from "./database/db"

function App() {

  const [fazendas,setFazendas] = useState(()=>{
    const storedFazendas = localStorage.getItem("Pindu_lib")
    if(!storedFazendas) return []
    return JSON.parse(storedFazendas)
  })
  
  
  // connectDatabase()
  return (
    


      <FazendaContext.Provider value={fazendas}>
    <RouterProvider router={router} />
    </FazendaContext.Provider>

    
  )
}

export default App