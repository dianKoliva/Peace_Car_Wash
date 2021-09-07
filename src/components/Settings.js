import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./settings/Header.js";
import Dashboard from "../layout/Dashboard.js";
import Profile from "./settings/Profile.js";
import Account from "./settings/Account"
import Notifications from "./settings/Notifications.js";

export default function CenteredTabs() {
  const [nav, setNav] = React.useState(2)
  return (
    <Dashboard>
    <div>
      <Grid container xs={12} spacing={3}>
        <Grid item xs={12}>
          <Header navValue={nav} setNav={setNav}></Header>
        </Grid>
        <Grid item xs={8} className="mt-2">
          {nav === 0 ? <Profile></Profile> : nav === 1 ? <Account></Account> : <Notifications></Notifications>}
        </Grid>
      </Grid>
    </div>
    </Dashboard>
  );
}
