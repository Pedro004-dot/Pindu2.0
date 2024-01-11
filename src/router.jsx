
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Macro from "./pages/macro/macro";
import Micro from "./pages/micro/micro";
import Consulta from "./pages/consulta/consulta";
// import RootLayout from "./pages/rootLayout";
import ProductBoundary from "./pages/error/ProductBondary";

    const router = createBrowserRouter(
      [
       {
         path: "/",
         element: <Login/>,
         // children:[{
         //    index:true,
         //    element: <Login/>,
           
         },{
            path:"macro",
            element: <Macro/>,
           
            children:[{
                path:"micro",
                element: <Micro/>,
                errorElement:<ProductBoundary/>,
            }]
         },
         {
            path:"consulta",
            element: <Consulta/>,
            
         }
        
    ]
    )
    export default router