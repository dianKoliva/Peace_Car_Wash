/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext,useEffect ,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Dashboard from "../../layout/Dashboard";

import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    width: "30%",
    marginLeft:"30%",
    marginTop:"15%",
    height:"8em"
  }
});




export default function StickyHeadTable() {
  const classes=useStyles();
  const history=useHistory();
  const [choice,setChoice]=useState("");


  return (
    <Dashboard>
    <Paper className={classes.root}>
    <Button variant="contained"  color="primary">Remera</Button>
    <Button variant="contained"  color="secondary"  onClick={()=>{history.push("/app/nyabugogoNight")}}>Nyabugogo</Button>
    </Paper>
    </Dashboard>
  );
}

/* eslint-disable no-unused-vars */