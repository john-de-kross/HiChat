
import React, { createContext, useContext, useState} from "react";

export const handleContext = createContext();


function HandleMessage({children}) {
    const [text, setText] = useState('')
    const handleText = (e) => {
        const {value} = e.target;
        setText(value)
    }

    const clearText = () => {
        setText('')
    }
    
    return ( 
        <handleContext.Provider value={{text, handleText, clearText}}>
            {children}
        </handleContext.Provider>

     );
}

export default HandleMessage;

export const messageCarrier = () => {
    return useContext(handleContext)
}