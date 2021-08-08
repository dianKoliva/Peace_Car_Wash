import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./settings/Header.js";
import Profile from "./settings/Profile.js";

export default function CenteredTabs() {
  return (
    <div>
      <Grid container xs="12" spacing={3}>
        <Grid item xs="12">
          <Header></Header>
        </Grid>
        <Grid item xs="8" className="mt-2">
          <Profile></Profile>
        </Grid>
      </Grid>
    </div>
  );
}
