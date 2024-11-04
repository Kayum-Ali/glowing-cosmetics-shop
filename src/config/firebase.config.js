import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import credintials from "./credintials";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey || credintials.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain || credintials.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId || credintials.VITE_projectId,
    storageBucket:
        import.meta.env.VITE_storageBucket || credintials.VITE_storageBucket,
    messagingSenderId:
        import.meta.env.VITE_messagingSenderId ||
        credintials.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId || credintials.VITE_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
