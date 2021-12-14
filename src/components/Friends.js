import React, {useState, useEffect} from 'react';
import Friend from "./Friend";
import axiosWithAuth from "../utils/axiosWithAuth";

const friendsInitialValues = []


const Friends = () => {
    const [friends, setFriends] = useState(friendsInitialValues);
    console.log(friends)

    useEffect(() => {
        axiosWithAuth().get("/friends")
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    return (
        <div>
            <div>
                <h1>Friends</h1>
            </div>
            {
                friends.map(friend => {
                    return <Friend key={friend.id} friend={friend}/>
                })
            }
        </div>
    );
};

export default Friends;






































