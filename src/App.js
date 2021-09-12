/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { createBrowserHistory } from "history";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";
import { MyContext } from "./MyContext";
import { useEffect, useState } from "react";
import Dash from "./components/Dash";
import DayServices from "./components/dayServices/ServiceList";
import VehichlePayment from "./components/dayServices/VehichlePayment";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import RegisterDay from "./components/dayServices/DayServices";
import RentingList from "./components/renting/RentingList";
import RentingRegister from "./components/renting/RentingRegister";
import RentPayement from "./components/renting/RentPayement";
import Settings from "./components/Settings";
import RentingPayment from "./components/renting/RentPayement";
// import ProtectedRoute from "./ProtectedRoute";
import NightList from "./components/nightServices/remera/NightList";
import NightRegister from "./components/nightServices/NightRegister";
import NightPayement from "./components/nightServices/NightPayment";
import AfterSignUp from "./pages/AfterSigUp";
import EditDayService from "./components/dayServices/EditDaySevice";
import EdtitNyabugogo from "./components/nightServices/nyabugogo/EditNight";
import RentingEdit from "./components/renting/RentingEdit";
import Unauthorized from "../src/pages/Unauthorized";
import ProtectedRoute from "../src/components/ProtectedRoute";
import NotFound from "../src/pages/NotFound";
import ExpenseRegister from "./components/expenses/ExpenseRegister";
import ExpenseList from "./components/expenses/ExpenseList";
import Night from "./components/nightServices/NightChoose"


function App() {

const [token,setToken]=useState(localStorage.getItem("token"));
const [open, setOpen] =useState(true);
const [serviceList,setServiceList]=useState("");
const [toBePayed,setToBePayed]=useState("");
const [user,setUser]=useState(); 
const [roles,setRoles]=useState();
const [loged,setLoged]=useState(true);
const [toEdit,setToEdit]=useState("");
const [ search,setSearch]=useState("");
const [ notifications,setNotifications,]=useState("")


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
        token,
        setToken,
        open,
        setOpen,
        toBePayed,
        setToBePayed,
        user,
        setUser,
        loged,
        setLoged,
        toEdit,
        setToEdit,
        search,
        setSearch,
        notifications,
        setNotifications,
      }}
    >
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <ProtectedRoute path="/app" user={token} exact component={Dash} />

            <ProtectedRoute
              path="/app/settings"
              user={token}
              exact
              component={Settings}
            />

            <ProtectedRoute
              path="/app/rent"
              user={token}
              exact
              component={RentingList}
            />
            <ProtectedRoute
              path="/app/rent/payment"
              user={token}
              exact
              component={RentingPayment}
            />
            <ProtectedRoute
              path="/app/rent/register"
              user={token}
              exact
              component={RentingRegister}
            />

            <ProtectedRoute
              path="/app/rent/edit"
              user={token}
              exact
              component={RentingEdit}
            />

            <ProtectedRoute
              path="/app/dayservices"
              user={token}
              exact
              component={DayServices}
            />
            <ProtectedRoute
              path="/app/dayservices/payment"
              user={token}
              exact
              component={VehichlePayment}
            />
            <ProtectedRoute
              path="/app/dayservices/register"
              user={token}
              exact
              component={RegisterDay}
            />
            <ProtectedRoute
              path="/app/dayservices/edit"
              user={token}
              exact
              component={EditDayService}
            />

            <ProtectedRoute
              path="/app/nightservices"
              user={token}
              exact
              component={NightList}
            />
            <ProtectedRoute
              path="/app/night"
              user={token}
              exact
              component={Night}
            />
            <ProtectedRoute
              path="/app/nightservices/register"
              user={token}
              exact
              component={NightRegister}
            />
            <ProtectedRoute
              path="/app/nightservices/payment"
              user={token}
              exact
              component={NightPayement}
            />

            <ProtectedRoute
              path="/app/expense"
              user={token}
              exact
              component={ExpenseList}
            />
            <ProtectedRoute
              path="/app/expense/register"
              user={token}
              exact
              component={ExpenseRegister}
            />

            <Route path="/wait" exact component={AfterSignUp} />
            <Route exact path="/unauthorized" component={Unauthorized} />
            <Route path="" exact component={NotFound} />
          </Switch>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
