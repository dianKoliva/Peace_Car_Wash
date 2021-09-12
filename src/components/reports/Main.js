/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext,useEffect ,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { MyContext } from "../../MyContext";
import Dashboard from "../../layout/Dashboard";

import { useHistory } from 'react-router-dom';
import { CheckBox, LocalGasStationRounded } from "@material-ui/icons";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";





const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  width: {
    width: "50%",
  },
  margin:{
      marginLeft:"4px"
  },
  greenBut:{
    marginTop:"4px"
  }
});




export default function StickyHeadTable() {
  const classes = useStyles();
  const [report,setReport]=useState("");
  const [branch,setBranch]=useState("");
  const [nyabu,setNyobu]=useState("Nyabugogo");
  const [remera,setRemera]=useState("Remera");
  const [daily,setDaily]=useState("Daily");
  const [weekly,setWeekly]=useState("Weekly");
  const [from,setFrom]=useState("");
  const [to,setTo]=useState("");

  const print=()=>{

  }


  

  

  
 

  return (
    <Dashboard>
    <Grid container spacing={3}>
        <Grid item xs={6} >
        <Paper className={classes.root}>
        <div className="p-6">
        <p className="mb-4">Night Services</p>
        <div className="flex">
       
        <FormControl
                variant="outlined"
                size="small"
                className={` ${classes.width}`}
                margin="dense"
               
              >
                <InputLabel>Report Type</InputLabel>
                <Select label="Report Type"
                value={report}
                onChange={(e)=>{
                  setReport (e.target.value);          
               }}
                
                >
              
           
          <MenuItem value={daily} >Daily Report</MenuItem>
          <MenuItem value={weekly} >Weekly Report</MenuItem>
                 
                </Select>
              </FormControl>

              <FormControl
                variant="outlined"
                size="small"
                className={` ${classes.width} ${classes.margin}`}
                margin="dense"
               
              >
                <InputLabel>Branch</InputLabel>
                <Select label="Report Type"
                value={branch}
                onChange={(e)=>{
                  setBranch (e.target.value);          
               }}
                
                >
              
           
          <MenuItem value={nyabu} >Nyabugogo</MenuItem>
          <MenuItem value={remera} >Remera</MenuItem>
                 
                </Select>
              </FormControl>
        </div>
        <div className="flex">

        <TextField
                margin="dense"
                id="date"
                label="From"
                variant="outlined"
                value={from}
                type="date"
            
                size="small"
                name="entry_date"
                className={`${classes.width} `}
                InputLabelProps={{
                  shrink: true,
                }}
                 onChange={(e)=>setFrom(e.target.value)}
              />

<TextField
                margin="dense"
                id="date"
                label="To"
                variant="outlined"
                value={to}
                type="date"
            
                size="small"
                name="entry_date"
                className={`${classes.width} ${classes.margin}`}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e)=>setTo(e.target.value)}
              />

        </div>
        <Button
                variant="contained"
                color="primary"
                className={`${classes.greenBut} ${classes.width} mt-2`}
                onClick={()=>{
                
                }}
              >
               Print    
              </Button>

        </div>
    
    </Paper>
        </Grid>

<Grid item xs={6}></Grid>

<Grid item xs={6}>
        <Paper className={classes.root}>
        <div className="p-6">
        <p className="mb-4">Night Invoices</p>
        <div className="flex">
       
        <FormControl
                variant="outlined"
                size="small"
                className={` ${classes.width}`}
                margin="dense"
               
              >
                <InputLabel>Invoice Type</InputLabel>
                <Select label="Report Type"
                value={report}
                onChange={(e)=>{
                  setReport (e.target.value);          
               }}
                
                >
              
           
          <MenuItem value={daily} >Daily Invoice</MenuItem>
          <MenuItem value={weekly} >Weekly  Invoice</MenuItem>
                 
                </Select>
              </FormControl>

              <FormControl
                variant="outlined"
                size="small"
                className={` ${classes.width} ${classes.margin}`}
                margin="dense"
               
              >
                <InputLabel>Branch</InputLabel>
                <Select label="Report Type"
                value={branch}
                onChange={(e)=>{
                  setBranch (e.target.value);          
               }}
                
                >
              
           
          <MenuItem value={nyabu} >Nyabugogo</MenuItem>
          <MenuItem value={remera} >Remera</MenuItem>
                 
                </Select>
              </FormControl>
        </div>
        <div className="flex">

        <TextField
                margin="dense"
                id="date"
                label="From"
                variant="outlined"
                value={from}
                type="date"
            
                size="small"
                name="entry_date"
                className={`${classes.width} `}
                InputLabelProps={{
                  shrink: true,
                }}
                 onChange={(e)=>setFrom(e.target.value)}
              />

<TextField
                margin="dense"
                id="date"
                label="To"
                variant="outlined"
                value={to}
                type="date"
            
                size="small"
                name="entry_date"
                className={`${classes.width} ${classes.margin}`}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e)=>setTo(e.target.value)}
              />

        </div>
        <Button
                variant="contained"
                color="primary"
                className={`${classes.greenBut} ${classes.width} mt-2`}
                onClick={()=>{
                
                }}
              >
               Print    
              </Button>

        </div>
    
    </Paper>
        </Grid>

    </Grid>
   
    </Dashboard>
  );
}

/* eslint-disable no-unused-vars */