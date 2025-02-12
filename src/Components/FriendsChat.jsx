import React from "react";
import { useState, useEffect } from "react";
import { mode } from "./UserMode";
import { onSnapshot, getFirestore, doc, collection, setDoc, updateDoc, getDocs, getDoc } from "firebase/firestore";
import { auth } from "./Firebase";
import Lottie from "lottie-react";
import Animate from "./Animate.json"
import { usersId } from "./CirculateId";
import { useNavigate } from "react-router-dom";
import { messageCarrier } from "./HandleMessage";




function ChatLists() {
    const db = getFirestore()
    const [chatFriends, setChatFriends] = useState([]);
    const {isDarkMode} = mode()
    const [isLoading, setIsLoading] = useState(true);
    const {userId, setUserId} = usersId();
    const {messageState} = messageCarrier();
    const navigate = useNavigate();

    
    const chatLists = async() => {
        const userRef = doc(db, "users", auth.currentUser.uid);

        onSnapshot(userRef, async(snapShot) => {
        if (snapShot.exists()) {
            const docSnapc = snapShot.data();
            const sortChat = Object.entries(docSnapc.latestMessages);
            const sortedChat = sortChat.sort((a, b) => b[1].lastSeenAt - a[1].lastSeenAt )

            const chatDataWithName = await Promise.all(sortedChat.map(async([friendId, friendData]) => {
            const friendRef = doc(db, "users", friendId);
            const friendUsername = await getDoc(friendRef);
            return{
                id: friendId,
                username: friendUsername.data().username,
                lastSeen: friendData.lastSeenAt,
                message: friendData.message
            }
            }))

            setChatFriends(chatDataWithName)
            setIsLoading(false)

            
        }
        })

    }

    useEffect(() => {
        chatLists()

        return () => chatLists()

    }, [])

    useEffect(() => {
        console.log(chatFriends)

    }, [chatFriends])

    const getTime = (time) => {
        const timeSentInSec = time.lastSeen.seconds;

        const convertToMili = new Date(timeSentInSec * 1000);
        const hours = convertToMili.getHours();
        const minutes = convertToMili.getMinutes() < 10 ? `0${convertToMili.getMinutes()}` : convertToMili.getMinutes();

        const amPm = hours >= 12 ? 'pm' : 'am';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes}${amPm}`
    }

    if (isLoading) {
        return(
          <div className='flex w-full h-screen items-center justify-center '>
            <Lottie className="w-16 h-16" animationData={Animate} loop/>   
          </div>
        )  
        
      }
    
    return ( 
        <div className={` w-full py-6 min-h-screen ${isDarkMode ? 'text-white' : 'text-black'}`}>
      {chatFriends.length === 0 ? (
        <div className="chats text-base font-[500] flex flex-1 justify-center items-center w-full h-72">
          No chats yet. Start a conversation

        </div>
      ): (
        <div className="">
          {chatFriends.map((user) => (
            <div key={user.id} className="grid py-3 px-2 grid-cols-[10%_75%_10%]">
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
              <div className="flex flex-col">
                <div className="text-xs font-[Ubuntu] pr-6">
                    {getTime(user)}
                </div>
                
              </div>
            </div>
            
          ))}
          

        </div>
      
      
          

      
      )}
    </div>
    
        
     );
}

export default ChatLists;