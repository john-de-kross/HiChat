import React, { useEffect, useRef, useState } from "react";
import { usersId } from "./CirculateId";
import { getFirestore, doc, getDoc, Timestamp, setDoc, addDoc, collection, serverTimestamp, query, orderBy, onSnapshot, snapshotEqual } from "firebase/firestore";
import { mode} from "./UserMode";
import { messageCarrier } from "./HandleMessage";
import { auth } from "./Firebase";
import { div } from "motion/react-client";

function MyChat() {
    const {userId} = usersId();
    const db = getFirestore();
    const {isDarkMode} = mode();
    const [username, setUsername] = useState('');
    const messageRef = useRef(null);
    const {text, handleText, setText} = messageCarrier()
    const [message, setMessage] = useState([])

    useEffect(() => {
        const getUser = async() => {
            try{
                const userRef = doc(db, "users", userId);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    setUsername(userSnap.data().username)
                    console.log("Document data", userSnap.data())
                }else{
                    console.log("user does not exist exist")
                }

            
            }catch(error){
                console.log(error)

            }
        }
        getUser();
    }, [userId]);

    useEffect(() => {
        if (messageRef.current) {
            if (text.length >= 30){
                messageRef.current.style.height  = 'auto'
                messageRef.current.style.height = messageRef.current.scrollHeight + "px"
            }else{
                messageRef.current.style.height  = ''
                messageRef.current.style.height = ""

            }

            
        }

        return () => {
            messageRef.current.style.height  = ''
            messageRef.current.style.height = ""

        }
    }, [text]);

    const handleMessage = async(message, receiverId, senderId) => {
        try{
            const friendsId = senderId > receiverId
                          ? `${senderId}_${receiverId}`
                          : `${receiverId}_${senderId}`
        
            const docRef = collection(doc(db, "messages", friendsId), "chats");

            await addDoc(docRef, {
                senderId,
                receiverId,
                message,
                seen: false,
                sentAt: serverTimestamp()
            })

            setText('')
            console.log("message sent")

        }catch(error){
            console.log("An error occurred while trying to send message", error)
        }

    }

    const retrieveMsg = async(receiverId, senderId) => {
        try{
            const friendsId = senderId > receiverId
            ? `${senderId}_${receiverId}`
            : `${receiverId}_${senderId}`

            const docRef = collection(db, "messages", friendsId, "chats")
            const q = query(docRef, orderBy('sentAt'))
            const unsuscribe = onSnapshot(q, (snapshot) => {
                setMessage(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })))
            })

            return () => unsuscribe()

        }catch(err){
            console.log("error in retrieving message", err)
        }
    }

    useEffect(() => {
        retrieveMsg(userId, auth.currentUser.uid)

    }, [])

    useEffect(() => {
        console.log(message)

    }, [message])




    return ( 
        <div className={`w-full min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-slate-200'}`}>
            <div className={`w-full top-0 flex justify-between px-2 items-center h-20 ${isDarkMode ? 'bg-slate-800 text-gray-100' : 'bg-slate-300'}`}>
                <div className="flex gap-2">
                    <div className="py-2">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-6">
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-slate-200">
                        <img 
                        src="profile.png" 
                        alt="profile" />
                    </div>
                    <div>
                        {username}
                    </div>

                </div>
                <div className="flex gap-6">
                    <div className="video">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-6 w-5 h-5">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0
                         0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25
                         2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </div>
                    <div>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-6 w-5 h-5">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25
                        2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97
                        1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 
                        1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963
                        3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <div>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6 h-5 w-5">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12
                    12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12
                    18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>

                    </div>
                </div>
            </div>
            <div className="w-full mt-2">
                {message.map((msg) => (
                    <div key={msg.id} className={`text-white flex px-2 ${msg.senderId === auth.currentUser.uid ? 'justify-end' : 'justify-start'}`}>
                        <div className={`px-4 py-2 mt-2 rounded-lg max-w-xs break-words ${msg.senderId === auth.currentUser.uid ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                            {msg.message}

                        </div>  
                    </div>
                ))}
                
            </div>
            <div className="fixed px-2 grid grid-cols-[85%_15%] bg-slate-900 w-full bottom-0 pb-2">
                <div className="">
                    <textarea onChange={handleText} className={`flex py-3 h-12 w-full outline-none resize-none px-2 ${isDarkMode ? 'bg-slate-800 text-gray-100' : 'bg-slate-100'} 
                    rounded-3xl`} type="text" placeholder="Message" ref={messageRef}></textarea>
                </div>
                <div className={`flex absolute items-center py-0.5 top-3 right-20 gap-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-950'}`}>
                    <svg
                        
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="
                        currentColor" 
                        className={`size-6 transition ${text.length > 0 ? 'hidden' : ''} h-5 w-5 rotate-[-44deg]`}>
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3
                        3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                    </svg>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className={`size-6 w-5 h-5 ${text.length > 0 ? 'hidden' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>

                </div>
                
                <div className="microphone fixed right-2 bottom-2 ml-3 flex justify-center items-center py-2 w-10 h-10 rounded-full bg-green-600">
                    {text.length > 0 ? (
                        <svg 
                            onClick={() => handleMessage(text, userId, auth.currentUser.uid)}
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-6 w-5 h-5 fill-black">
                            <path strokeLinecap="round" 
                            strokeLinejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    ): (
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                        strokeWidth={1.5} 
                        stroke="currentColor"
                        className="size-6 w-5 h-5 fill-black">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 
                        7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>

                    )}
                </div>
            </div>
        </div>
     );
}
export default MyChat;