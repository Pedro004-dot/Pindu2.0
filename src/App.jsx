
import { RouterProvider } from "react-router-dom"
import router from "./router"
// import connectDatabase from "./database/db"

function App() {

  
  // connectDatabase()
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App