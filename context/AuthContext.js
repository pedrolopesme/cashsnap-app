import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);

    useEffect(function () {
        const unsub = onAuthStateChanged(auth, onInitializeUser);
        return unsub;
    }, []);

    // observes changes on user authentication state
    async function onInitializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            setIsLogged(true);
        } else {
            setCurrentUser(null);
            setIsLogged(false);
        }
        setIsLoadingAuth(false);
    }

    return <AuthContext.Provider value={{ currentUser, isLoadingAuth, isLogged }}>
        {!isLoadingAuth && children}
    </AuthContext.Provider>
}

function useAuth() {
    const ctx = useContext(AuthContext);
    if (ctx === undefined) {
        throw new Error("Auth Context was used outside of AuthProvider");
    }
    return ctx;
}

export { AuthProvider, useAuth };