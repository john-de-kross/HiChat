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
                <div key={user.receiverId} className="grid grid-cols-[15%_65%_20%] py-2 px-2">
                    <div className="avatar w-7 h-7 rounded-full bg-white">
                        <img 
                        className="w-full h-full"
                        src="profile.png" 
                        alt="profile" />
                    </div>
                    <div className="name">
                        {user.senderName}

                    </div>

                </div>
            ))}

        </div>
     );
}

export default FriendRequest;