import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// All component calls here

import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Dashboard from "./components/layout/Dashboard";
import Editor from "./components/layout/Editor";
import Feed from "./components/layout/Feed"


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/post" component={Editor} />
                    <Route path="/feed" component={Feed}/>
                    
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
