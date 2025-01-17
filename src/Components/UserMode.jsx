import React, { createContext, useContext, useState } from "react";
export const modeContext = createContext()
function UserMode({children}) {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('usersmode') === null ? false : JSON.parse(localStorage.getItem('usersmode')));
    const [isSidebar, setIsSidebar] = useState(false);
    const handleMode = () => {
        setIsDarkMode(prev => {
            const setModeInLocal = !prev
            localStorage.setItem('usersmode', JSON.stringify(setModeInLocal))
            return setModeInLocal
        })
    }
    const handleSidebar = () => {
        setIsSidebar(true)
    }
    return ( 
        <modeContext.Provider value={{isDarkMode, handleMode, isSidebar, setIsSidebar, handleSidebar}}>
            {children}
        </modeContext.Provider>
     );
}

export default UserMode;

export const mode = () => {
    const modeCon = useContext(modeContext)
    return modeCon
}