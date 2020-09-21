import React from "react";

import "./App.scss";

// All component calls here
import Button from "./components/Button";  
import Editor from "./components/editor"         //test remove later
import SignIn from "./components/login"
import SignUp from "./components/signup"



function App() {

    
    return (
        <div className="App">
            <h1>Socmed</h1>
            {/* <Editor/>
            <Button name="Mushi Mushi" /> */}
            {/* <SignIn/> */}
            <SignUp/>

        </div>
    );
}

export default App;
