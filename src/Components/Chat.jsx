import { collection, getFirestore, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import MyChat from "./MyChat";


function Chat({chatId}) {
    const db = getFirestore()
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!chatId) return
        const messageRef = collection(db, "messages", chatId, "chats");
        const q = query(messageRef, orderBy('sentAt'));

        const unsuscribe = onSnapshot(q, (snspShot) => {
            setMessages(snspShot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
        return () => unsuscribe()
    }, [chatId])

    useEffect(() => {
        console.log("jfjfjf", messages)
    }, [])
    return ( 
        <div className="">
            {messages.map((msg) =>(
                <MyChat key={msg.id} message={msg}/>
            ))}

        </div>
     );
}

export default Chat;