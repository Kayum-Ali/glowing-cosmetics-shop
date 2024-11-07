import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isCartUpdated, setIsCartUpdated] = useState(false);

    // const [refetc, setRefetc] = useState(true)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = async () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signUp = async (email, password) => {
        setLoading(true);
        return await createUserWithEmailAndPassword(auth, email, password);
    };
    const login = async (email, password) => {
        setLoading(true);
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        setLoading(true);
        return await signOut(auth);
    };
    const authInfo = {
        googleLogin,
        signUp,
        user,
        login,
        logout,
        loading,
        setLoading,
        cartUpdate: [isCartUpdated, setIsCartUpdated],
    };

    useEffect(() => {
        setLoading(true);
        const unSubsCribed = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubsCribed();
        };
    }, []);
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
