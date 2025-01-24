import React, { useEffect } from "react";
import { useState } from "react";
import { doc, getFirestore, onSnapshot, collection } from "firebase/firestore";
import { auth } from "./Firebase";


function FindFriends() {
    const db = getFirestore()
    const [users, setUsers] = useState([])
    const [loading, setIsLoading] = useState(true)
  

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
        const updatedUsers = snapshot.docs
        .filter((doc) => doc.id !== auth.currentUser.uid) 
        .map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        setUsers(updatedUsers)
        setIsLoading(false)
        })
        
        
        return () => unsub()

    }, [])

    if (loading){
        return <div className="flex justify-center items-center w-full min-h-screen">
            <div className="w-8 h-8 rounded-full border-[5px] border-blue-500 border-t-transparent animate-spin"></div>
        </div>
        
    }

    
    return (
        <div className="w-full min-h-screen">
            <div className="flex justify-center text-lg font-[500] py-2 items-center">
                <h2>Connect with friends</h2>
            </div>
            <div className="flex flex-col py-7">
                <div className="add-friends flex justify-between px-4 items-center">
                    <h2>Avatar</h2>
                    <h2>Name</h2>
                    <h2>Action</h2>
                </div>

            </div>

        </div>
     );
}

export default FindFriends;