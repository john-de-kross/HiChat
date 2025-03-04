import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";


function ChatItems({user, setUserId, isDarkMode, messageState, navigate, getTime}) {
    const db = getFirestore()
    const [count, setCount] = useState({});
    

    useEffect(() => {
        if (!user?.id) return;
        const userRef = doc(db, "users", user.id)
        const unsub = onSnapshot(userRef, (snapshot) => {
            if (snapshot.exists()) {
                const messageCount = snapshot.data().messageCount || 0
                setCount((prevCount) => {
                    return{
                        ...prevCount,
                        [user.id] : messageCount
                    }
                })
                
            }
            
        })

        return () => unsub()


    }, [user?.id])

    useEffect(() => {
        console.log(user.id)
    }, [])
    return ( 
        <div className="grid py-3 px-2 grid-cols-[10%_75%_10%]">
            <div className="w-full">
                <img 
                src="profile.png" 
                alt="profile" />
            </div>
            <div onClick={() => {setUserId(user.id), navigate('/my-chat'), messageState(user)}} className="flex flex-col px-2">
                <div className="username text-base font-[500]">
                {user.username}
                </div>
                <div className={`message ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm px-2`}>
                {user.message.length >= 40  ? `${user.message.slice(0, 31)}...` : user.message}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-xs font-[Ubuntu] pr-6">
                    {getTime(user)}
                </div>
                <div className={`w-5 h-5 text-white text-xs bg-blue-500 rounded-full ${count[user.id] === 0 ? 'hidden' : 'flex'} justify-center items-center`}>
                    {count[user.id]}
                </div>
            </div>
        </div>

     );
}

export default ChatItems;