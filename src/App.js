import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import "./App.css";
import { MyContext } from "./MyContext";
import {  useState } from "react";
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {

const routing=useRoutes(routes);
const [day,setDay]=useState(false);
const [settings,setSettings]=useState(false);
const [rent,setRenting]=useState(false);
const [dash,setDash]=useState(false);
const [newRenter,setNewRenter]=useState(false);
const [payRent,setPayRent]=useState(false);
const [dayServicePayment,setDayServicepayment]=useState(false);
const [dayRecord,setDayRecord]=useState(false);

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
      dayRecord,setDayRecord

    }}

    >

    <div className="App">
      
   {routing}
    </div>
    </MyContext.Provider>
  );
}

export default App;
