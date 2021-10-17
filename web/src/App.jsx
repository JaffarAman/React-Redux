import React from 'react'
import SignUpScreen from './Screen/SignUpScreen'
import "./maincssFile.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './Screen/LogIn';
const App = () => {
    return (
        <>
            <Router>
            <Switch>
        
                <Route  path="/signup"  component={SignUpScreen} />
                
                <Route exact path="/" component={LogIn} />

            </Switch>
            </Router>
                
        </>
    )
}

export default App
