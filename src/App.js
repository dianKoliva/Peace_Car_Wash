/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios';

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";
import { MyContext } from "./MyContext";
import {  useEffect, useState } from "react";
import Dash from "./components/Dash";
import DayServices from "./components/dayServices/ServiceList"
import VehichlePayment from "./components/dayServices/VehichlePayment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterDay from "./components/dayServices/DayServices"
import RentingList from "./components/renting/RentingList"
import RentingRegister from "./components/renting/RentingRegister"
import RentPayement from "./components/renting/RentPayement"
import Settings from "./components/Settings"
import RentingPayment from "./components/renting/RentPayement";
import ProtectedRoute from "./ProtectedRoute";
import NightList from "./components/nightServices/NightList"
import NightRegister from "./components/nightServices/NightRegister"
import NightPayement from "./components/nightServices/NightPayment"

function App() {

const [token,setToken]=useState();
const [open, setOpen] =useState(true);
const [serviceList,setServiceList]=useState("");
const [toBePayed,setToBePayed]=useState("");
const [user,setUser]=useState();
const [roles,setRoles]=useState();

async function getRoles(){
  await axios.get('/roles',
  {
   headers: {
     'Authorization':token

   }
   
 }).then((response)=>{

  
  setServiceList(response.data)

 }).catch(error=>{
   console.log(error);
 })
}

async function getServices(){
  await axios.get('/services',
    {
     headers: {
       'Authorization':token

     }
     
   }).then((response)=>{

    
    setServiceList(response.data)
    
  
   }).catch(error=>{
     console.log(error);
   })
}

  useEffect(()=>{
    getServices()
  },[])



  return (
    <MyContext.Provider
    
    value={{
  
      token,setToken,
      open, setOpen,
      serviceList,setServiceList,
      toBePayed,setToBePayed,
      user,setUser
    }}

    >

    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/app" exact component={Dash}/>

          <Route path="/app/settings" exact component={Settings}></Route>

          <Route path="/app/rent" exact component={RentingList}></Route>
          <Route path="/app/rent/payment" exact component={RentingPayment}></Route>
          <Route path="/app/rent/register" exact component={RentingRegister}></Route>

          <Route path="/app/dayservices" exact component={DayServices}></Route>
          <Route path="/app/dayservices/payment" exact component={VehichlePayment}></Route>
          <Route path="/app/dayservices/register" exact component={RegisterDay}></Route>

          <Route path="/app/nightservices" exact component={NightList}></Route>
          <Route path="/app/nightservices/register" exact component={NightRegister}></Route>
          <Route path="/app/nightservices/payment" exact component={NightPayement}></Route>
          
        
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
    </MyContext.Provider>
  );
}

export default App;
