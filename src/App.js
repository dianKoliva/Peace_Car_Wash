import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/dashboard" exact component={Dashboard}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
