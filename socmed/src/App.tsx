import React from "react";

import "./App.scss";

// All component calls here
        
import SignIn from "./components/login"
import SignUp from "./components/signup"
import Button from "./components/layout/Button";

function App() {
    return (
        <div className="App">
            <h1>Socmed</h1>

            <Button name="Mushi Mushi" />
        </div>
    );
}

export default App;
