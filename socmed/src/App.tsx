import React from "react";
import "./App.scss";
import { BrowserRouter,Switch,Route } from 'react-router-dom'

// All component calls here

import SignIn from "./components/login/login";
import SignUp from "./components/signup/signup";
import Button from "./components/layout/Button";
import { signOut, signUp } from "./store/actions/userActions";
import Dashboard from "./components/layout/Dashboard"
import Editor from "./components/layout/Editor"



function App() {
    return (
        
    <BrowserRouter>
      <div className="App">
        
        {/* <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          
        </Switch> */}
        <Editor/>
        
      </div>
    </BrowserRouter>
    );
}

export default App;
