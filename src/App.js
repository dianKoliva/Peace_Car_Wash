/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { createBrowserHistory } from 'history';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";
import { MyContext } from "./MyContext";
import {  useEffect, useState } from "react";
import Dash from "./components/Dash";
import DayServices from "./components/dayServices/ServiceList"
import VehichlePayment from "./components/dayServices/VehichlePayment";
import {  BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom";
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
import AfterSignUp from "./pages/AfterSigUp"
import EditDayService from "./components/dayServices/EditDaySevice"
import EdtitNight from "./components/nightServices/EditNight"

function App() {

const [token,setToken]=useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjgxNWUyY2Q3ZjJmMzdmYzYzNWFlNiIsInBob25lX251bWJlciI6IjA3OTA2MDAwMDAiLCJmaXJzdF9uYW1lIjoiVGVzdGVyIiwibGFzdF9uYW1lIjoiQWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluMTIzIiwiaWF0IjoxNjMxMDM2NDU2LCJleHAiOjE2MzExMjI4NTZ9._IgrtmelU_ArhjUmGEXh3RFL3LvAmWwWUxWu9WsX3RI");
const [open, setOpen] =useState(true);
const [serviceList,setServiceList]=useState("");
const [toBePayed,setToBePayed]=useState("");
const [user,setUser]=useState(); 
const [roles,setRoles]=useState();
const [loged,setLoged]=useState(true);
const [toEdit,setToEdit]=useState("");
const [ search,setSearch]=useState("");


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



  useEffect(()=>{
    
  },[])

  const history = createBrowserHistory();

  return (
    <MyContext.Provider
    
    value={{
  
      token,setToken,
      open, setOpen,
      toBePayed,setToBePayed,
      user,setUser,
      loged,setLoged,
      toEdit,setToEdit,
      search,setSearch

      
    }}

    >

    <div className="App">
      
      <Router  >
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
          <Route path="/app/dayservices/edit" exact component={EditDayService}></Route>

          <Route path="/app/nightservices" exact component={NightList}></Route>
          <Route path="/app/nightservices/register" exact component={NightRegister}></Route>
          <Route path="/app/nightservices/payment" exact component={NightPayement}></Route>
          <Route path="/app/nightservices/edit" exact component={EdtitNight}></Route>

          <Route path="/wait" exact component={AfterSignUp}></Route>
          
        
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
    </MyContext.Provider>
  );
}

export default App;
