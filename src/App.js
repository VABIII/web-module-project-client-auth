import React, { useState } from 'react';
import './App.css';
import {Route} from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login"
import Friends from "./components/Friends";
import Logout from "./components/Logout";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";


function App() {


  return (
    <div className="App">
      <Header/>
        <br/>
      <Route path={"/login"} component={Login}/>
      <PrivateRoute path={"/friends"} component={Friends}/>
      <PrivateRoute  path={"/logout"} component={Logout}/>
      <PrivateRoute path={"/add-friend"} component={AddFriend} />
    </div>
  );
}

export default App;
