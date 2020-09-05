import React from "react";

import "./App.scss";

// All component calls here
import Button from "./components/Button";  
import Editor from "./components/editor"         //test remove later



function App() {

    
    return (
        <div className="App">
            <h1>Socmed</h1>
            <Editor/>
            <Button name="Mushi Mushi" />
        </div>
    );
}

export default App;
