import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

PrivateRoute.propTypes = {
    isAuthenticated : PropTypes.string, 
  }
  

function PrivateRoute({ isAuthenticated }) {
 return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;