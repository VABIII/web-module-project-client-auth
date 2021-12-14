import React, {useEffect} from 'react';
import axios from "axios";



const Logout = () => {
    useEffect(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        window.location.href = "/login";
    }, [])

    return (
        <div></div>
    );
};

export default Logout;





































