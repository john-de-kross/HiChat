import React, { useEffect, useState } from "react";
import { mode } from "./UserMode";
import { collection, onSnapshot, getFirestore, updateDoc, query, where, getDoc, doc } from "firebase/firestore";
import { auth } from "./Firebase";
import Lottie from "lottie-react";
import Animate from './Animate.json';
import { useNavigate } from "react-router-dom"; 
import { usersId } from "./CirculateId";
import { messageCarrier } from "./HandleMessage";


function Friends() {
    const db = getFirestore()
    const {isDarkMode} = mode();
    const [friendCollection, setFriendCollection] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const {userId, setUserId} = usersId()
    const {messageState} = messageCarrier()

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "users", auth.currentUser.uid), async(snapshot) => {
            const friendsId = snapshot.data().friends || [];

            const friendsData = await Promise.all(
                friendsId.map(async(id) => {
                    const userRef = doc(db, "users", id)
                    const getUser = await getDoc(userRef);
                    return {
                        id: id,
                        username: getUser.data().username,
                        
                    }
                })
            )
            .then((friends) => {
                setFriendCollection(friends.filter(friend => friend !== null).sort((a, b) => a.username.localeCompare(b.username)))
                setIsLoading(false)
            })
        });

        return () => unsubscribe()


    }, [])



    useEffect(() => {
        console.log(friendCollection)

    }, [friendCollection])

    if (isLoading) {
        return <div className="flex w-full min-h-screen justify-center items-center">
           <Lottie className="w-16 h-16" animationData={Animate} loop/>

        </div>
        
    }

    
    return ( 
        <div className={`min-h-screen w-full ${isDarkMode ? 'bg-slate-900' : 'bg-[smokewhite]'}`}>
            <div className={`w-full grid grid-cols-[10%_30%_40%_10%_10%] border-b ${isDarkMode ? 'border-slate-600 text-white' : 'border-slate-300 text-black'} px-2 py-2`}>
                <div>
                    <svg onClick={() => navigate('/')}

                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" 
                        className="size-6 absolute mt-3 stroke-slate-500">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </div>
                <div className={`flex flex-col text-base font-[400] ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
                    <div className="">
                        <p>Select friend</p>
                    </div>
                    <div className="text-sm font-[200]" >
                        {friendCollection.length} friends
                    </div>
                </div>
                <div></div>
                <div className="py-3">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor"
                        className="size-6 w-5 h-5 stroke-slate-300">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div className="py-3">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6 stroke-gray-300">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 6.75a.75.75 
                    0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0
                     1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>

                </div>
            </div>
            {friendCollection.length === 0 ? (
                <div className={`flex justify-center items-center text-lg font-[400] flex-1 h-[50vh] ${isDarkMode ? 'text-white' : ''}`}>
                    You have no friends yet
                </div>
            )
            : (
                <div className={`${isDarkMode ? 'text-gray-50'  : ''} `}>
                    <div className="px-2 py-1 text-lg font-[Ubuntu]">
                        Friends
                    </div>
                    <div className="flex flex-col py-2">
                        {friendCollection.map((user) => (
                            <div className="flex firends py-3 items-center px-2 text-base font-normal gap-2" key={user.id}>
                                <div className="w-12 h-12 rounded-full bg-white">
                                    <img 
                                    src="profile.png" 
                                    alt="profile" />
                                </div>
                                <div onClick={() => {setUserId(user.id), navigate('/my-chat'), messageState(user)}}>
                                    {user.username}
                                </div>
                            </div>
                        ))}

                    </div>
                     
                </div>
            )
        }

           
        </div>
        
     );
}

export default Friends;