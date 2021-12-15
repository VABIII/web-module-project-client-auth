import React, {useEffect} from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";


const Logout = () => {

    useEffect(() => {
        axiosWithAuth()
            .post('/logout')
            .then(() => {
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                localStorage.removeItem("role");
                window.location.href = "/login";
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <div></div>
    );
};

export default Logout;





































