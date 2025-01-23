import React, { useEffect } from "react";
import { useState } from "react";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";

function FindFriends() {
    const db = getFirestore()
    const [users, setUsers] = useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, 'users'), (doc) => {
            setUsers(doc.data())
            console.log(users)
        }, [])
        return () => unsubscribe()

    })
    return (
        <div className="">

        </div>
     );
}

export default FindFriends;