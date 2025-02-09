import React, { useState } from "react";
import { useEffect } from "react";
import { onSnapshot, getFirestore, collection, getDoc, doc, updateDoc, setDoc, Timestamp, deleteDoc, arrayUnion } from "firebase/firestore";
import { mode } from "./UserMode";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";




function FriendRequest() {
    const {isDarkMode} = mode()
    const db = getFirestore()
    const [requests, setRequests] = useState([])
    const [requestDetails, setRequestDetails] = useState([])
    const navigate = useNavigate()
    

    

    useEffect(() => {
        const  unsub = onSnapshot(collection(db, "friendRequests"), (snapshot) =>{
            const updatedLists = snapshot.docs
            .filter((doc) => doc.data().receiverId === auth.currentUser.uid)
            .map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
                
            setRequests(updatedLists)
        })
        return() => unsub()
    }, [])
const getSendersDetails = async(id)=>{
    const ref = doc(db, "users", id.senderId)
    const senderdoc = await getDoc(ref)
    if (senderdoc.exists()) {
        return senderdoc.data().username;
    }else{
        return "Unknown user"
    }
}

const TimeSent = async(time) =>{
    const currentTimeInSec = Math.floor(Date.now() / 1000);
    const timeDiff = currentTimeInSec - time.seconds;


    if (timeDiff < 60){
        return 'Just now'
    }
    else if (timeDiff >= 60 && timeDiff < 3600) {
        const minute = Math.floor(timeDiff / 60);
        return `${minute}m ago`
    }
    else if (timeDiff >= 3600 && timeDiff < 86400) {
        const hours = Math.floor(timeDiff / 3600);
        return `${hours}h ago`;
    }
    else if (timeDiff >= 86400 && timeDiff < 604800) {
        const days = Math.floor(timeDiff / 86400);
        return `${days}d ago`;
    }
    else if (timeDiff >= 604800) {
        const weeks = Math.floor(timeDiff / 604800);
        return `${weeks}w ago`;
    }
    
    
    

}

const mergeDetails = async() => {
    const updatedData = await Promise.all(
        requests.map(async(data) => {
            const senderUsername = await getSendersDetails(data);
            const receivedAt = await TimeSent(data)
            return{
                ...data,
                senderUsername,
                receivedAt
            }
        })
    )
    setRequestDetails(updatedData)
}

useEffect(() => {
    mergeDetails()

}, [requests])

const acceptRequest = async(user) => {
    try{
        const docRef = doc(db, "friendRequests", user.id)
        await updateDoc(docRef, {
            status: "Accepted"
        })
        const getReceiverName = doc(db, "users", user.receiverId)
        const ref = await getDoc(getReceiverName)
        const receiverUsername = ref.exists() ? ref.data().username : "Unknown user"

        const friendShipId =  user.senderId < user.receiverId
            ? `${user.senderId}_${user.receiverId}`
            : `${user.receiverId}_${user.senderId}`;


        const friendShipRef = doc(db, "friendShips", friendShipId)
        const friendShipDoc = {
            user1Id: user.senderId,
            user2Id: user.receiverId,
            user1Username: user.senderUsername,
            user2Username: receiverUsername,
            createdAt: Timestamp.now()
        }

        await setDoc(friendShipRef, friendShipDoc);

        //Update both users' friend lists
        const senderRef = doc(db, "users", user.senderId);
        const receiverRef = doc(db, "users", user.receiverId);

        //Add receiver's ID to sender's friend list
        await updateDoc(senderRef, {
            friends: arrayUnion(user.receiverId)
        });

        //Add sender's ID to receiver's friend list
        await updateDoc(receiverRef, {
            friends: arrayUnion(user.senderId)
        })
        
        console.log("created")

        await deleteDoc(doc(db, "friendRequests", user.id))



        
    }catch(error){
        console.log("Error updating data and creating friends", error)
    }

}

const declineRequest = async(user) => {
    try{
        setLoader(true)
        await deleteDoc(doc(db, "friendRequests", user.id));
        console.log("deleted");
    }catch(error){
        console.log("Error", error)

    }

}

useEffect(() => {
    console.log(requestDetails)
    console.log(auth.currentUser.uid)

}, [requestDetails])


    return ( 
        <div className={`w-full min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'text-white'}`}>
            <div onClick={() => navigate('/find-friends')} className={`flex font-[500]  py-3 w-full ${isDarkMode ? 'text-orange-400': 'text-black'} text-lg justify-center items-center`}>
                Friend Requests
            </div>
            <div className="w-full flex justify-end pr-4">
                <div className={`flex justify-center items-center w-8 h-8 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-gray-500' }`}>
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
                     d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>
            </div>
            <div className="flex text-sm font-[Ubuntu] font-[400] px-2 gap-4">
                <button onClick={() => navigate('/friends')} className={`w-24 h-9 rounded-xl text-white ${isDarkMode ? 'bg-purple-950' : 'bg-slate-900'}`}>
                    Your friends
                </button>
                <button onClick={() => navigate('/find-friends')} className={`w-24 h-9 rounded-xl text-white ${isDarkMode ? 'bg-purple-950' : 'bg-slate-900'}`}>Suggestions</button>
            </div>
            {requestDetails.map((user) => (
                <div key={user.id} className="grid grid-cols-[20%_60%_20%] py-2 px-2">
                    <div className="profile w-16 h-16 rounded-full bg-slate-50">
                        <img 
                        className="w-full h-full"
                        src="profile.png" 
                        alt="profile" />
                    </div>
                    <div className="username flex flex-col px-2 py-2">
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-950'}`}>
                            {user.senderUsername}
                        </div>
                        <div className="flex text-sm mt-0.5 font-[Ubuntu, serif] gap-2">
                            <button onClick={() => acceptRequest(user)} className={`w-16 h-7 rounded bg-green-500 text-white ${isDarkMode ? 'bg-green-500' : ''}`}>
                                Accept
                            </button>
                            <button onClick={() => declineRequest(user)} className="w-16 h-7 rounded bg-slate-800">
                               Decline
                            </button>
                            
                        </div>

                    </div>
                    <div className={`text-sm font-[100] py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {user.receivedAt}
                    </div>


                </div>
            ))}

        </div>
     );
}

export default FriendRequest;