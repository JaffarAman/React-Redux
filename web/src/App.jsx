import React from 'react'
import SignUpScreen from './Screen/SignUpScreen'
import "./maincssFile.css"
import PrivateRoute from "./config/routes"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './Screen/LogIn';
import  DashboardScreen from "./Screen/DashboardScreen"
const App = () => {
    return (
        <>
            <Router>
            <Switch>
        
                <Route  path="/signup"  component={SignUpScreen} />
                
                
                <Route exact path="/" component={LogIn} />
                
                <PrivateRoute component={DashboardScreen} exact path="/dashboard" />
                {/* <Route exact path="/dashboard" component={DashboardScreen} /> */}
            
            </Switch>
            </Router>
                
        </>
    )
}

export default App
