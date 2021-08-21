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
import Settings from "./components/Settings"
import RentingPayment from "./components/renting/RentPayement";
import ProtectedRoute from "./ProtectedRoute";


function App() {

const [token,setToken]=useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWI2ZGVjMzlmOWJjMDAxNmZkZGI5MyIsInBob25lX251bWJlciI6IjA3OTA3Nzg4NDgiLCJmaXJzdF9uYW1lIjoiUHJldHR5IiwibGFzdF9uYW1lIjoiRGlhbmUiLCJyb2xlIjp7Il9pZCI6IjYxMWQ4YTIxOTE2NDBkNDUzNGM1MGU2NCIsIm5hbWUiOiJ1c2VyIn0sImlhdCI6MTYyOTUxODk1MywiZXhwIjoxNjI5NjA1MzUzfQ.6bV9sc0v0g_vFHV43UYhIDWxYXz_iKOcpdu5V3TPwWE");
const [open, setOpen] =useState(true);

  return (
    <MyContext.Provider
    
    value={{
  
      token,setToken,
      open, setOpen
    }}

    >

    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <ProtectedRoute path="/app" exact component={Dash}/>

          <Route path="/app/settings" exact component={Settings}></Route>

          <Route path="/app/rent" exact component={RentingList}></Route>
          <Route path="/app/rent/payment" exact component={RentingPayment}></Route>
          <Route path="/app/rent/register" exact component={RentingRegister}></Route>

          <Route path="/app/dayservices" exact component={DayServices}></Route>
          <Route path="/app/dayservices/pay" exact component={VehichlePayment}></Route>
          <Route path="/app/dayservices/register" exact component={RegisterDay}></Route>
          
        
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
    </MyContext.Provider>
  );
}

export default App;
