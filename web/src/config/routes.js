import React from 'react'
import { Route , Redirect } from 'react-router-dom'

const PrivateRoute = ({component:Component , ...rest}) => {
      return(  <Route render={(props)=>{
            return localStorage.getItem("data")?
            <Component {...props} /> : <Redirect to="/" />
        }} />
            )

}

export default PrivateRoute
