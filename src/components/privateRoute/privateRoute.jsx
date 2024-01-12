import { Route, Navigate } from "react-router-dom";
import Login from "../../pages/login/Login";

export default function PrivateRoute({ element, path }){
    const isAuthenticated = localStorage.getItem('authenticatedUser') !== null;

    
    return isAuthenticated ? <Route path={path} element={element} /> : <Navigate to="/login" />;
}


// import { Route } from 'react-router-dom';
// import { redirect } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//  <Route
//     {...rest}
//     render={(props) =>
      
//       true ? (
//         <Component {...props} />
//       ) : (
//         <redirect to="/login" />
//       )
//     }
//  />
// );

// export default PrivateRoute;