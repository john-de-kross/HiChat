import React, { useState } from "react";
import { useEffect } from "react";
import { onSnapshot, getFirestore, doc, collection } from "firebase/firestore";
import { mode } from "./UserMode";
import { auth } from "./Firebase";


function FriendRequest() {
    const {isDarkMode} = mode()
    const db = getFirestore()
    const [requests, setRequests] = useState([])

    useEffect(() => {
        const  unsub = onSnapshot(collection(db, "friendRequests"), (snapshot) =>{
            const updatedLists = snapshot.docs
            .filter((doc) => doc.data().receiverId === auth.currentUser.uid)
            .map((doc) => ({
                ...doc.data()
            }))
                
            setRequests(updatedLists)
        })
        return() => unsub()
    }, [])
    return ( 
        <div className={`w-full min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : ''}`}>
            <div className="flex w-full text-lg justify-center items-center">
                Friend Requests
            </div>
            {requests.map((user) => (
                <div key={user.receiverId} className="grid grid-cols-[12%_56%_32%] w-full justify-center items-center py-2 px-2">
                    <div className="avatar w-7 h-7 rounded-full bg-white">
                        <img 
                        className="w-full h-full"
                        src="profile.png" 
                        alt="profile" />
                    </div>
                    <div className="name text-sm font-[500]">
                        {user.senderName}
                    </div>
                    <div className="flex justify-between gap-3 text-sm font-[500]">
                        <button className="bg-green-500 h-8 w-20 rounded-xl">Accept</button>
                        <button className="bg-green-500 h-8 w-20 rounded-xl">Decline</button>

                    </div>

                </div>
            ))}

        </div>
     );
}

export default FriendRequest;