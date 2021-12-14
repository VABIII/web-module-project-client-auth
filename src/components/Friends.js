import React, {useState} from 'react';
import Friend from "./Friend";
import axios from "axios";

const friendsInitialValues = []


const Friends = () => {
    const [friends, setFriends] = useState(friendsInitialValues);


// useEffect(() => {
//     axios.post("http://localhost:9000/api/login", credentials)
//         .then(res => {
//             console.log(res)
//         })
//         .catch(err => {
//             console.error(err);
//         })
//
// }, [])

    return (
        <div>
            <Friend/>
        </div>
    );
};

export default Friends;






































