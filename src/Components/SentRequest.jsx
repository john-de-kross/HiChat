import React, { useEffect, useState } from "react";
import { mode } from "./UserMode";
import { getFirestore, onSnapshot, collection, getDoc, doc } from "firebase/firestore";
import { auth } from "./Firebase";
import { async } from "validate.js";


function SentRequest() {
    const db = getFirestore();
    const {isDarkMode} = mode();
    const [requests, setRequests] = useState([])
    const [receiverDetails, setReceiverDetails] = useState([])

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "friendRequests"), (snapshot) => {
            const requestdocs = snapshot.docs
            .filter((user) => user.data().senderId === auth.currentUser.uid)
            .map((data) => ({
                id: data.id,
                ...data.data()
            }))
            setRequests(requestdocs)
        })
        return () => unsub()
    }, [])
    
    const getReceiverDetails = async(receiverId) => {
        const docRef = doc(db, "users", receiverId.receiverId)
        const ref = await getDoc(docRef)
        if (ref.exists()) {
            return{
                receiverName: ref.data().fullName,
                receiverusername: ref.data().username
            } 
        }else{
            return "Unknown User"
        }
        

    }

    const mergeDetailsWithRequest = async() => {
        const receiverData = await Promise.all(
            requests.map(async (data) => {
                const receiverDetails = await getReceiverDetails(data)
                const receiverName = receiverDetails.receiverName
                const receiverUsername = receiverDetails.receiverusername
                return{
                    ...data,
                    receiverName,
                    receiverUsername
                }
            })
        )
        setReceiverDetails(receiverData)
    }

    useEffect(() => {
        if (requests.length > 0){
            mergeDetailsWithRequest();
        }
    }, [requests])

    useEffect(() => {
        console.log(receiverDetails)
    }, [receiverDetails])

    

    return ( 
        <div className={`w-full min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : ''}`} >
           <div className="flex py-4 request-h justify-center items-center">
            <h1>Request Status</h1>
           </div>
           <div className="grid gap-2 request-h px-2 border-b grid-cols-[15%_65%_20%]">
            <div>Avatar</div>
            <div className="Name">Name</div>
            <div className="status">Status</div>
           </div>
           {receiverDetails.map((user) => (
            <div key={user.id} className="grid request_text gap-2 py-2 px-2 border-b grid-cols-[15%_55%_30%]">
                <div className="h-full w-full rounded-full ">
                    <img
                    className="w-full h-full"
                    src="profile.png" 
                    alt="profile" />
                </div>
                <div className="flex-col">
                    <div className="">
                        {user.receiverName}
                    </div>
                    <div className="text-sm font-light">
                        {user.receiverUsername}
                    </div>
                </div>
                <div className="w-full h-8 rounded-xl mt-2 flex justify-center items-center bg-opacity-55 bg-green-300">
                    {user.status}
                </div>
            </div>
           ))}

 
        </div>
     );
}

export default SentRequest;