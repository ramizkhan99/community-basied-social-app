import React from "react";

import "./App.scss";

// All component calls here

import SignIn from "./components/login/login";
import SignUp from "./components/signup/signup";
import Button from "./components/layout/Button";

function App() {
    return (
        <div className="App">
            <SignIn />
            {/* <Button name="Mushi Mushi" /> */}
        </div>
    );
}

export default App;
