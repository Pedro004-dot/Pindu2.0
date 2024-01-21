
// import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Macro from "./pages/macro/macro";
import Micro from "./pages/micro/micro";
import Consulta from "./pages/consulta/consulta";
import { createBrowserRouter } from "react-router-dom";
// import PrivateRoute from "./components/privateRoute/privateRoute";

// import RootLayout from "./pages/rootLayout";
// import ProductBoundary from "./pages/error/ProductBondary";

// const isAuthenticated = localStorage.getItem('authenticatedUser');
    const router = createBrowserRouter(
      [
       {
         path: "/",
         element: <Login/> ,
         },{
            path:"/macro",
            element: <Macro/>,
         },
         {
            path:"/consulta",
            element:<Consulta/> ,
         },
         {
            path:"/fazenda/:fazendaId",
            element:<Micro/> ,
         },

         // {
         //    path: "/fazenda/:fazendaId", 
         //    element: <PrivateRoute><Fazenda/></PrivateRoute>,
         //  },

        
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
{/* <PrivateRoute isAuthenticated={isAuthenticated}>

</PrivateRoute> */}

// {
//   path: "/",
//   element: <Login/> ,
// },
// {
//   path:"/macro",
//   element: <PrivateRoute isAuthenticated={isAuthenticated}><Macro/></PrivateRoute>,
// },
// {
//   path:"/consulta",
//   element:<PrivateRoute isAuthenticated={isAuthenticated}><Consulta/></PrivateRoute> ,
// },
// {
//   path:"/micro",
//   element:<PrivateRoute isAuthenticated={isAuthenticated}><Micro/></PrivateRoute> ,
// },