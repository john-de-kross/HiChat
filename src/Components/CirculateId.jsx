import React, { createContext, useContext, useEffect, useState } from "react";

export const idContext = createContext()
function IdCircle({children}) {
    const [userId, setUserId] = useState('');


    useEffect(() => {
        console.log(userId);
    }, [userId])


    return ( 
        <idContext.Provider value={{userId, setUserId}}>
            {children}
        </idContext.Provider>

     );
}


export default IdCircle;

export const usersId = () => {
    return useContext(idContext)
}