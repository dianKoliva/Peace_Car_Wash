/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext,useEffect ,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Dashboard from "../../layout/Dashboard";

import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: "100%",
  }
});




export default function StickyHeadTable() {
  const classes=useStyles();


  return (
    <Dashboard>
    <Paper className={classes.root}>
    
    </Paper>
    </Dashboard>
  );
}

/* eslint-disable no-unused-vars */