/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios'
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


function App() {

const [token,setToken]=useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWI2ZGVjMzlmOWJjMDAxNmZkZGI5MyIsInBob25lX251bWJlciI6IjA3OTA3Nzg4NDgiLCJmaXJzdF9uYW1lIjoiUHJldHR5IiwibGFzdF9uYW1lIjoiRGlhbmUiLCJyb2xlIjp7Il9pZCI6IjYxMWQ4YTIxOTE2NDBkNDUzNGM1MGU2NCIsIm5hbWUiOiJ1c2VyIn0sImlhdCI6MTYyOTczOTQ4NSwiZXhwIjoxNjI5ODI1ODg1fQ.2Rm7Uqe9Mh_Ka3u4ywRyGrMJA54tRMcMQGgABHOXPtE");
const [open, setOpen] =useState(true);
const [serviceList,setServiceList]=useState("");
const [toBePayed,setToBePayed]=useState("");

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
      toBePayed,setToBePayed
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
          
        
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
    </MyContext.Provider>
  );
}

export default App;
