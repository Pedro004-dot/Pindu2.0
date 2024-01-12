
// import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Macro from "./pages/macro/macro";
import Consulta from "./pages/consulta/consulta";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/privateRoute";
// import RootLayout from "./pages/rootLayout";
// import ProductBoundary from "./pages/error/ProductBondary";


    const router = createBrowserRouter(
      [
       {
         path: "/",
         element: <Login/> ,
         },{
            path:"/macro",
            element: <Macro/>,
            component: PrivateRoute,
           
            // children:[{
            //     path:"micro",
            //     element: <Micro/>,
            //     errorElement:<ProductBoundary/>,
            // }]
         },
         {
            path:"/consulta",
            element:<Consulta/> ,
            component: PrivateRoute,
            
         }
        
    ]
    )
    export default router


// import { useHistory } from 'react-router-dom';

// function PrivateRoute({ component: Component, ...rest }) {
//  const isAuthenticated = localStorage.getItem("authenticatedUser");
//  const history = useHistory();
//  return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           history.push('/')
//         )
//       }
//     />
//  );
// }

// export default function App() {
//  return (
//     <BrowserRouter>
//       <Route path="/login" component={Login} />
//       <PrivateRoute path="/macro" component={Macro} />
//       <PrivateRoute path="/consulta" component={Consulta} />
//     </BrowserRouter>
//  );
// }
