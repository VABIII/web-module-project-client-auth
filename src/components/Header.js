import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    const token = localStorage.getItem("token")

    return (
        <div>
            <div>
                <h2>Client Auth Project</h2>
            </div>
            <div>
                <Link to={"/"}>Home</Link>&nbsp;
                { !token && <Link to={"/login"}>Login</Link>}&nbsp;
                <Link to={"/friends"}>Friends</Link>&nbsp;
                {token && <Link to={"/logout"}>Logout</Link>}&nbsp;
            </div>
        </div>
    );
};

export default Header;






































