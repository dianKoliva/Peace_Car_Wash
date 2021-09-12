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
  const [Weekly,setWeekly]=useState("Weekly");
  const [from,setFrom]=useState("");
  const [to,setTo]=useState("");

  const print=()=>{

  }


  

  

  
 

  return (
    <Dashboard>
    <Grid container>
        <Grid item xs={6} spacing={3}>
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
                // name="service"
            //     onChange={(e)=>{
            //       setService (e.target.value);          
            //    }}
                
                >
              
           
          <MenuItem value={10} >Daily Report</MenuItem>
          <MenuItem value={10} >Weekly Report</MenuItem>
                 
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
                // name="service"
            //     onChange={(e)=>{
            //       setService (e.target.value);          
            //    }}
                
                >
              
           
          <MenuItem value={10} >Nyabugogo</MenuItem>
          <MenuItem value={10} >Remera</MenuItem>
                 
                </Select>
              </FormControl>
        </div>
        <div className="flex">

        <TextField
                margin="dense"
                id="date"
                label="From"
                variant="outlined"
                // value={entry}
                type="date"
            
                size="small"
                name="entry_date"
                className={`${classes.width} `}
                InputLabelProps={{
                  shrink: true,
                }}
                // onChange={(e)=>handleChange(e)}
              />

<TextField
                margin="dense"
                id="date"
                label="To"
                variant="outlined"
                // value={entry}
                type="date"
            
                size="small"
                name="entry_date"
                className={`${classes.width} ${classes.margin}`}
                InputLabelProps={{
                  shrink: true,
                }}
                // onChange={(e)=>handleChange(e)}
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