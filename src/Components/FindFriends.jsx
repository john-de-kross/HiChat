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
        <div className="w-full flex flex-col min-h-screen">
            <div className="flex justify-center text-lg font-[500] py-2 items-center">
                <h2>Connect with friends</h2>
            </div>
            <div className="flex add-friends w-full py-2 justify-between px-2">
                <div className="flex gap-2">
                    <h2>Avatar</h2>
                    <h2>Name</h2>
                </div>
                <div>
                    <h2>Action</h2>
                </div>
            </div>
            {users.map((user) => (
                    <div key={user.id} className="flex py-2 border-[1px] border-x-0 justify-between px-2 text-base">
                        <div className="flex gap-4">
                            <div className="flex justify-center items-center ava-profile h-9 w-9 rounded-full bg-gray-300">
                                <img
                                className="h-full w-full" 
                                src="profile.png" 
                                alt="profile" />
                            </div>
                            <div className="flex text-base font-[400] flex-col name">
                                {user.fullName}
                                <small className="text-sm font-[100]">{user.username}</small>
                            </div>
                        </div>
                        <div className="flex justify-center mt-2 items-center add-icon w-12 rounded h-8 border-[1px]">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-6 w-5 h-5">
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                        </div>

                    </div>
                ))}

        </div>
     );
}

export default FindFriends;