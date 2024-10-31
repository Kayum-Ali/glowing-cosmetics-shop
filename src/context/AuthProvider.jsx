import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()

    const googleLogin = async() =>{
        return signInWithPopup(auth,googleProvider)
    }

    const signUp = async( email, password) =>{
        return await createUserWithEmailAndPassword(auth,email, password)
    }
    const login = async(email, password) =>{
        return await signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {
        googleLogin,
        signUp,
        user

    }


    useEffect(()=>{
        const unSubsCribed = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unSubsCribed()
        }
    },[])
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