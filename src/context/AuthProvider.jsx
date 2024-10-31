import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../config/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    
    const googleLogin = async() =>{
        return signInWithPopup(auth,googleProvider)
    }
    const authInfo = {
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;