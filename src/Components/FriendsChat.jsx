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
import ChatItems from "./ChatIttems";




function ChatLists() {
    const db = getFirestore()
    const [chatFriends, setChatFriends] = useState([]);
    const {isDarkMode} = mode()
    const {userId, setUserId} = usersId();
    const {messageState, getMessageCount, setMessageCount} = messageCarrier();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)

    
    const chatLists = async() => {
      if(!auth.currentUser.uid) return

      const userRef = doc(db, "users", auth.currentUser.uid);

      onSnapshot(userRef, async(snapShot) => {
      if (snapShot.exists()) {
          const docSnap = snapShot.data();
          if (!docSnap.latestMessages || Object.keys(docSnap.latestMessages).length === 0) {
            setChatFriends([])
            setIsLoading(false)
            return; 
          }
          const sortChat = Object.entries(docSnap.latestMessages);
          const sortedChat = sortChat.sort((a, b) => b[1].lastSeenAt - a[1].lastSeenAt )

          const chatDataWithName = await Promise.all(sortedChat.map(async([friendId, friendData]) => {
          const friendRef = doc(db, "users", friendId);
          const friendUsername = await getDoc(friendRef);
          return{
              id: friendId,
              username: friendUsername.data().username,
              lastSeen: friendData.lastSeenAt,
              message: friendData.message,
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
      if (!time?.lastSeen?.seconds) {
        return;
        
      }


      const timeSentInSec = time.lastSeen.seconds;

      const convertToMili = new Date(timeSentInSec * 1000);
      const now = new Date()
      const hours = convertToMili.getHours();
      const minutes = convertToMili.getMinutes() < 10 ? `0${convertToMili.getMinutes()}` : convertToMili.getMinutes();
      const year = convertToMili.getFullYear();
      const month = convertToMili.getMonth() + 1;
      const day = convertToMili.getDate()


      const nowYear = now.getFullYear();
      const nowMonth = now.getMonth() + 1;
      const nowDay = now.getDate() 

      

      const amPm = hours >= 12 ? 'pm' : 'am';
      const formattedHours = hours % 12 || 12;

      if (year === nowYear && month === nowMonth && day === nowDay) {
        return `${formattedHours}:${minutes}${amPm}`
        
      }
      const yesterday = new Date()
      yesterday.setDate(now.getDate() - 1)
      
      if (year === yesterday.getFullYear() && month === yesterday.getMonth() && day === yesterday.getDate()){
        return 'yesterday'

      }

      return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year.toString().slice(-2)}`

  }

    if (isLoading) {
      return(
        <div className='flex justify-center items-center py-20'>
          <Lottie className="w-16 h-16" animationData={Animate} loop/>   
        </div>
      )  
      
    }
    
    return ( 
      <div className={` w-full py-6  ${isDarkMode ? 'text-white' : 'text-black'}`}>
        {chatFriends.length === 0 ? (
          <div className="chats text-base font-[500] py-16 flex justify-center items-center w-full">
            No chats yet. Start a conversation

          </div>
        ): (
          <div className="">
            {chatFriends.map((user) => (
              <ChatItems 
              key={user.id} 
              user={user}
              setUserId={setUserId}
              isDarkMode={isDarkMode}
              messageState={messageState}
              navigate={navigate}
              getTime = {getTime}
              />
              
            ))}
            

          </div>
        
        
            

        
        )}
    </div>
    
        
     );
}

export default ChatLists;