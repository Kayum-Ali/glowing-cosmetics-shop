import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import credentials from "./credentials";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey || credentials.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain || credentials.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId || credentials.VITE_projectId,
    storageBucket:
        import.meta.env.VITE_storageBucket || credentials.VITE_storageBucket,
    messagingSenderId:
        import.meta.env.VITE_messagingSenderId ||
        credentials.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId || credentials.VITE_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
