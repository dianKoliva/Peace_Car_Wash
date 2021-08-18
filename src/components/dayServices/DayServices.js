/* eslint-disable no-unused-vars */
import { makeStyles, TextField, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { MyContext } from "../../MyContext";
import{useState} from 'react';
import axios from 'axios';


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
  const {token,setToken}=useContext(MyContext);
  const {dayServicePayment,setDayServicepayment}=useContext(MyContext);
  const {dayRecord,setDayRecord}=useContext(MyContext);
  const [plate,setPlate]=useState("");
  const [type,setType]=useState("")
  const [cus_name,setCusName]=useState("");
  const[cus_phone,setCusPhone]=useState("");
  const[care_fname,setCareFname]=useState("");
  const[care_lname,setCareLname]=useState("");
  const [care_phone,setCarePhone]=useState("");
  const [service,setService]=useState("");
  const [out_date,setOutDate]=useState();
  const[entry_date,setEntryDate]=useState();

const  handleBlur=(e)=>{

  if(e.target.name==="plate"){
    if (e.target.value==="") {
      setPlate("n");
    }
    else{
      setPlate(e.target.value);
    }
  }

   if(e.target.name==="type"){
    if (e.target.value==="") {
      setType("n");
    }
    else{
      setType(e.target.value);
    }
  }

  if(e.target.name==="cus_name"){
    if (e.target.value==="") {
      setCusName("n");
    }
    else{
      setCusName(e.target.value);
    }
  }

  if(e.target.name==="cus_phone"){
    if (e.target.value==="") {
      setCusPhone("n");
    }
    else{
      setCusPhone(e.target.value);
    }
  }

   if(e.target.name==="care_phone"){
    if (e.target.value==="") {
      setCarePhone("n");
    }
    else{
      setCarePhone(e.target.value);
    }
  }
   if(e.target.name==="care_lname"){
    if (e.target.value==="") {
      setCareLname("n");
    }
    else{
      setCareLname(e.target.value);
    }
  }
   if(e.target.name==="care_fname"){
    if (e.target.value==="") {
      setCareFname("n");
    }
    else{
      setCareFname(e.target.value);
    }
  }

}

const submit=async()=>{

  const json = JSON.stringify({plate_number: "string",
  car_type: "string",
  entry_date: "string",
  out_date: "string",
  customer_name: "string",
  phone_number: "string",
  taker_fname: "string",
  taker_lname: "string",
  taker_number: "string",
  service: "string"})
 await axios.post('/dactivity',{
  json
 },
 {
  headers: {
    'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWI2ZGVjMzlmOWJjMDAxNmZkZGI5MyIsInBob25lX251bWJlciI6IjA3OTA3Nzg4NDgiLCJmaXJzdF9uYW1lIjoiUHJldHR5IiwibGFzdF9uYW1lIjoiRGlhbmUiLCJyb2xlIjpudWxsLCJpYXQiOjE2MjkyMzY1MzksImV4cCI6MTYyOTMyMjkzOX0.6bcArCn1t-trWFp_0hLr2u2r7JWuSvHZg--15jsOCNI",
    'Content-Type': 'application/json'
  }
  
}).then((response)=>{
  console.log(response.data);
}).catch(error=>{
  console.log(error);
})


}


  return (
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
                size="small"
                className={classes.width}
                name="plate"
                onBlur={(e)=>{
                  handleBlur(e);
                }}
              />
              {plate==="n"?<p className="text-red-500">plate number required</p>:null}
              <TextField
                margin="dense"
                label="Car Type"
                variant="outlined"
                // inputProps={{ style: { fontSize: 17 } }}
                // InputLabelProps={{ style: { fontSize: 15 } }}
                size="small"
                className={classes.width}
                name="type"
                  onBlur={(e)=>{
                  handleBlur(e);
                }}
              />
              {type==="n"?<p className="text-red-500 text-xs">Car Type required</p>:null}
            </Grid>
            <Grid item xs={6}>
              <p className="text-lg text-gray-500">Customer Details</p>
              <TextField
                margin="dense"
                label="Customer's Name"
                variant="outlined"
                size="small"
                name="cus_name"
                className={classes.width}
                onBlur={(e)=>{
                  handleBlur(e);
                }}

              />
              {cus_name==="n"?<p className="text-red-500 text-xs">Customer name required</p>:null}

              <TextField
                margin="dense"
                label="Phone Number"
                variant="outlined"
                name="cus_phone"
                
                size="small"
                className={classes.width}
                onBlur={(e)=>{
                  handleBlur(e);
                }}
              />
              {cus_phone==="n"?<p className="text-red-500 text-xs">Phone number required</p>:null}
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
                <InputLabel>Select</InputLabel>
                <Select label="Service">
                  {/* <MenuItem value="">
                    <em>None</em>
                  </MenuItem> */}
                  <MenuItem value="mech">Mechanic</MenuItem>
                  <MenuItem value="wash">Washing</MenuItem>
                 
                </Select>
              </FormControl>
              <br></br>
              <TextField
                margin="dense"
                id="date"
                label="Entry Date"
                variant="outlined"
                type="date"
                name="entry_date"
                size="small"
                className={classes.width}
                InputLabelProps={{
                  shrink: true,
                }}
              />

            <TextField
                margin="dense"
                id="date"
                label="Out Date"
                variant="outlined"
                type="date"
                name="out_date"
                size="small"
                className={classes.width}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-lg text-gray-500">Care taker Details</p>
              <TextField
                margin="dense"
                label="First Name"
                variant="outlined"
                className={classes.width}
                name="care_fname"
                size="small"
                 onBlur={
                  (e)=>{
                    handleBlur(e);
                  }
                }
              />
              {care_fname==="n"?<p className="text-red-500 text-xs">First name required</p>:null}
              <TextField
                margin="dense"
                label="Last Name"
                variant="outlined"
                className={classes.width}
                size="small"
                name="care_lname"
                 onBlur={
                  (e)=>{
                    handleBlur(e);
                  }
                }
              />
              {care_lname==="n"?<p className="text-red-500 text-xs">Last name required</p>:null}
              <TextField
                margin="dense"
                label="Phone Number"
                variant="outlined"
                className={classes.width}
                size="small"
                name="care_phone"

                onBlur={
                  (e)=>{
                    handleBlur(e);
                  }
                }
                
              />
              {care_phone==="n"?<p className="text-red-500 text-xs">Phone number required</p>:null}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                className={`${classes.blueBut} ${classes.width} ${classes.low}`}
                onClick={()=>{
                  submit();
                }}
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
                  setDayServicepayment(true);
                  setDayRecord(false);
                }}
              >
                Continue Payment
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DayServices;
