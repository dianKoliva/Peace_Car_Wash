/* eslint-disable no-unused-vars */
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";
import { MyContext } from "./MyContext";
import {  useState } from "react";
import Dash from "./components/Dash";
import DayServices from "./components/dayServices/ServiceList"
import VehichlePayment from "./components/dayServices/VehichlePayment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterDay from "./components/dayServices/DayServices"
import RentingList from "./components/renting/RentingList"
import RentingRegister from "./components/renting/RentingRegister"
import RentPayement from "./components/renting/RentPayement"
import Settings from "./components/settings/Profile"


function App() {

const [day,setDay]=useState(false);
const [settings,setSettings]=useState(false);
const [rent,setRenting]=useState(false);
const [dash,setDash]=useState(false);
const [newRenter,setNewRenter]=useState(false);
const [payRent,setPayRent]=useState(false);
const [dayServicePayment,setDayServicepayment]=useState(false);
const [dayRecord,setDayRecord]=useState(false);
const [token,setToken]=useState("");
const [open, setOpen] =useState(true);

  return (
    <MyContext.Provider
    
    value={{
      day,setDay,
      settings,setSettings,
      rent,setRenting,
      dash,setDash,
      newRenter,setNewRenter,
      payRent,setPayRent,
      dayServicePayment,setDayServicepayment,
      dayRecord,setDayRecord,
      token,setToken,
      open, setOpen
    }}

    >

    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/app" exact component={Dash}></Route>
          <Route path="app/dayservices" exact component={DayServices}></Route>
          <Route path="app/dayservices/payment" exact component={VehichlePayment}></Route>
          <Route path="app/dayservices/register" exact component={RegisterDay}></Route>
          <Route path="app/rent" exact component={RentingList}></Route>
          <Route path="app/rent/register" exact component={RentingRegister}></Route>
          <Route path="app/rent/Payement" exact component={RentPayement}></Route>
          <Route path="app/settingss" component={Settings}></Route>
          
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
    </MyContext.Provider>
  );
}

export default App;
