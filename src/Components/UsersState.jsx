import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

export const authContext = createContext()
function UsersState({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return () => unsuscribe()
            
    }, [])
    return(
        <authContext.Provider value={{currentUser, loading}}>
            {children}
        </authContext.Provider>
    )

}

export default UsersState;

export const authState = () => {
    const context = useContext(authContext);
    return context;
}

