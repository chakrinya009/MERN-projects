// import { Button } from "@chakra-ui/react";
import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact/>
      <Route path='/chats' component={Chatpage} exact/>
    </div>
  );
};

export default App;
