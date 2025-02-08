
import React, { createContext, useContext, useState} from "react";
import { auth } from "./Firebase";

export const handleContext = createContext();


function HandleMessage({children}) {
    const [text, setText] = useState('');
    const [seen, setSeen] = useState({})
    const handleText = (e) => {
        const {value} = e.target;
        setText(value)
    }

    const clearText = () => {
        setText('')
    }

    const messageState = (user) => {
        setSeen((prev) => ({
            ...prev,
            [user.id] : true
        })) 
          
        

    }
    
    return ( 
        <handleContext.Provider value={{text, handleText, clearText, messageState, seen}}>
            {children}
        </handleContext.Provider>

     );
}

export default HandleMessage;

export const messageCarrier = () => {
    return useContext(handleContext)
}