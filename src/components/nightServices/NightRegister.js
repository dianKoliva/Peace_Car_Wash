/* eslint-disable no-unused-vars */
import { makeStyles, TextField, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { MyContext } from "../../MyContext";
import Dashboard from "../../layout/Dashboard";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: "10em",
    marginRight: "10em",
  },
  drop: {
    height: "10px",
    minwidth: 400,
  },
  blueBut: {
    backgroundColor: "#1665D8",
    color: "white",
  },

  width: {
    width: "70%",
  },
  greenBut: {
    backgroundColor: "#4AAF05",
    color: "white",
  },
  margin: {
    marginTop: "10px",
  },
  low: {
    textTransform: "capitalize",
  },
}));

function DayServices() {
  
  const classes = useStyles();
  const {dayServicePayment,setDayServicepayment}=useContext(MyContext);
  const {dayRecord,setDayRecord}=useContext(MyContext);
  const {plate,setPlate}=useState("");
  const {type,setType}=useState("");
  const {driverName,setDriverName}=useState("");
  const {driverPhone,setDriverPhone}=useState("");
  const {fname,setFname}=useState("");
  const {lname,setLname}=useState("");
  const {carePhone,setCarePhone}=useState("");
  const {service,setService}=useState("");
  const{carProb,setCarProb}=useState("");
  const {entry,setEntry}=useState("");
  const {mech,setMech}=useState("Mechanic");
  const {wash,setWash}=useState("Washing");
  
  function handleChange(e){
if(e.target.name==="plate"){
  setPlate(e.target.value);
}
else if(e.target.name==="type"){
setType(e.target.value);
}
else if(e.target.name==="driver_name"){
setDriverName(e.target.value)
}
else if(e.target.name==="driver_phone"){
  setDriverPhone(e.target.value);
}
else if(e.target.name==="fname"){
  setFname(e.target.value)
}
else if(e.target.name==="lname"){
  setLname(e.target.value);

}
else if(e.target.name==="care_phone"){
  setCarePhone(e.target.value)
}
else if(e.target.name==="prob"){
  setCarProb(e.target.value);

}
else if(e.target.name==="entry_date"){
  setEntry(e.target.value)

}
else if(e.target.name==="service"){

   setService(e.target.value);
}


  }



  function submit(){
//  console.log(plate,type)
  }


  return (
    <Dashboard>
    <div>
      <Grid
      
      
       container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h6">Register New Vehicle</Typography>
        </Grid>
        <Grid item xs={12} className={classes.container}>
          <p className="text-lg font-bold">At Service in Peace Car Wash</p>
          <p className="text-gray-500">
            Register new vehicle attending Peace Car Wash Services
          </p>
          <Grid  container spacing={3} className={classes.margin}>
            <Grid item xs={6}>
              <p className="text-lg text-gray-500">Car Details</p>
              <TextField
                margin="dense"
                label="Plate Number"
                variant="outlined"
                name="plate"
                size="small"
                className={classes.width}
                value={plate}
                onChange={(e)=>handleChange(e)}
              />
              <TextField
                margin="dense"
                label="Car Type"
                variant="outlined"
                // inputProps={{ style: { fontSize: 17 } }}
                // InputLabelProps={{ style: { fontSize: 15 } }}
                size="small"
                className={classes.width}
                value={type}
                name="type"
                onChange={(e)=>handleChange(e)}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-lg text-gray-500">Driver Details</p>
              <TextField
                margin="dense"
                label="Driver's Name"
                variant="outlined"
                size="small"
                className={classes.width}
                value={driverName}
                name="driver_name"
                onChange={(e)=>handleChange(e)}
              />
              <TextField
                margin="dense"
                label="Phone Number"
                variant="outlined"
                size="small"
                className={classes.width}
                value={driverPhone}
                name="driver_phone"
                onChange={(e)=>handleChange(e)}
              />
            </Grid>
          </Grid>
          <Grid 
          container spacing={3} className={classes.margin}>
            <Grid item xs={6}>
              <p className="text-lg text-gray-500">Service</p>
              <FormControl
                variant="outlined"
                size="small"
                className={` ${classes.width}`}
                margin="dense"
              >
                <InputLabel>Service</InputLabel>
                <Select label="Sevice" name="service"
                 onChange={(e)=>handleChange(e)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                
                  <MenuItem value={mech}>Mechanic</MenuItem>
                  <MenuItem value={wash}>Washing</MenuItem>
                </Select>
              </FormControl>
                <TextField
                margin="dense"
                label="Car Problem"
                variant="outlined"
                value={carProb}
                name="prob"
                size="small"
                className={classes.width}
                // InputLabelProps={{
                //   shrink: true,
                // }}
                onChange={(e)=>handleChange(e)}
              />
              <br></br>
              <TextField
                margin="dense"
                id="date"
                label="Entry Date"
                variant="outlined"
                value={entry}
                type="date"
                defaultValue="2017-05-24"
                size="small"
                name="entry_date"
                className={classes.width}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e)=>handleChange(e)}
              />

            
            </Grid>
            <Grid item xs={6}>
              <p className="text-lg text-gray-500">Care taker Details</p>
              <TextField
                margin="dense"
                label="First Name"
                name="fname"
                variant="outlined"
                className={classes.width}
                size="small"
                value={fname}
                onChange={(e)=>handleChange(e)}
              />
              <TextField
                margin="dense"
                label="Last Name"
                name="lname"
                variant="outlined"
                className={classes.width}
                size="small"
                value={lname}
                onChange={(e)=>handleChange(e)}
              />
              <TextField
                value={carePhone}
                margin="dense"
                label="Phone Number"
                variant="outlined"
                className={classes.width}
                size="small"
                name="care_phone"
                onChange={(e)=>handleChange(e)}
              />
            </Grid>

          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                className={`${classes.blueBut} ${classes.width} ${classes.low}`}
                onClick={()=>submit()}
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.greenBut} ${classes.width} ${classes.low}`}
                onClick={()=>{
                
                }}
              >
                Continue Payment
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    </div>
    </Dashboard>
  );
}

export default DayServices;
