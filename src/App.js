/* eslint-disable no-unused-vars */
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import "./App.css";
import { MyContext } from "./MyContext";
import { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/dashboard" exact component={Dashboard}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
    </MyContext.Provider>
  );
}

export default App;
