import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
    const location = useLocation()
  
  const {user,loading} = useContext(AuthContext)
  if(loading){
    return <div className="loading loading-bars loading-lg py-12 h-screen text-green-600 mx-auto flex justify-center items-center"></div>
  }
  if(user){
    return children
  }
  return <Navigate to={`/login`} replace state={location.pathname}></Navigate>
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}
export default PrivateRoute;