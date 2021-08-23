/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MyContext } from './MyContext';



const ProtectedRoute = ({ component: Component, ...rest }) => {
 const {token,setToken}=useContext(MyContext);
  return (
    
    <Route {...rest} render={
      props =>{ 
          if(token===""){
return<Redirect to={
   {
       pathname:"/signup",
       state:{
           from:props.location
       }
   }
}/>
          }
          else{
            return <Component {...rest} {...props} />
          }
      
    }
    } />
  )
}

export default ProtectedRoute;