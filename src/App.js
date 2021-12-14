import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {Route} from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login"
import Friends from "./components/Friends";
import Logout from "./components/Logout";


const credentials = {
    username: "Bloom",
    password: "Tech",
    role: "admin",
    token:"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
}





function App() {



  return (
    <div className="App">
      <Header/>
        <br/>
      <Route path={"/login"} component={Login}/>
      <Route path={"/friends"} component={Friends}/>
      <Route path={"/logout"} component={Logout}/>
    </div>
  );
}

export default App;
