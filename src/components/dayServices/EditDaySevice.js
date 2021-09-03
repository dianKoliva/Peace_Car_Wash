/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { makeStyles, TextField, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { MyContext } from "../../MyContext";
import{useState} from 'react';
import axios from 'axios';
import Dashboard from "../../layout/Dashboard";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";



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
  var date=new Date();
  var month=date.getMonth();
  var history=useHistory();
  function check(){
    if(month<10){
      var h=month
      month=`0${h}`
    }
   
  }
   check();
   
 
  var final=`${date.getFullYear()}-${month}-${date.getDate()}`
  
  const classes = useStyles();
  const {token,setToken}=useContext(MyContext);
  const {serviceList,setServiceList}=useContext(MyContext);
  const [plate,setPlate]=useState("");
  const [type,setType]=useState("")
  const [cus_name,setCusName]=useState("");
  const[cus_phone,setCusPhone]=useState("");
  const[taker_fname,setTakerFname]=useState("")
  const[care_lname,setCareLname]=useState("");
  const [care_phone,setCarePhone]=useState("");
  const [service,setService]=useState("");
  const [out_date,setOutDate]=useState("");
  const[entry_date,setEntryDate]=useState(final);
  const[error,setError]=useState();
  const[mech,setMech]=useState("Mechanic");
  const[wash,setWash]=useState("Wash");
  const{toBePayed,setToBePayed}=useContext(MyContext);
  const[success,setSuccess]=useState(false);
  const{ toEdit,setToEdit}=useContext(MyContext);

 

  useEffect(()=>{

    setType(toEdit.car_type);
    setCusName(toEdit.customer_name);
    setEntryDate(toEdit.entry_date);
    setOutDate(toEdit.out_date);
    setCusPhone(toEdit.phone_number);
    setPlate(toEdit.plate_number);
    setService(toEdit.service._id);
    setTakerFname(toEdit.taker_fname);
    setCareLname(toEdit.taker_lname);
    setCarePhone(toEdit.taker_number);
  },[])
   

const  handleBlur=(e)=>{

  if(e.target.name==="plate"){
    if (e.target.value==="") {
     
    }
    else{
      setPlate(e.target.value);
    }
  }

   if(e.target.name==="type"){
    if (e.target.value==="") {
    
    }
    else{
      setType(e.target.value);
    }
  }

  if(e.target.name==="cus_name"){
    if (e.target.value==="") {
      
    }
    else{
      setCusName(e.target.value);
    }
  }

  if(e.target.name==="cus_phone"){
    if (e.target.value==="") {
     
    }
    else{
      setCusPhone(e.target.value);
    }
  }

   if(e.target.name==="care_phone"){
    if (e.target.value==="") {
    
    }
    else{
      setCarePhone(e.target.value);
    }
  }
   if(e.target.name==="care_lname"){
   
      setCareLname(e.target.value);

  }
   if(e.target.name==="care_fname"){
   setTakerFname(e.target.value)
   console.log() 
  }

}


const submit=async()=>{

  console.log(toEdit);


  if(plate===""||type===""||cus_name===""||cus_phone===""||taker_fname===""||care_lname===""||care_phone===""||service===""){
   setError(true);
   console.log(care_lname)
  
  }
  else{
    setError(false);
    console.log(serviceList)
    const json = JSON.stringify({ 
    plate_number: plate,
    car_type: type,
    entry_date: entry_date,
    out_date:entry_date,
    customer_name: cus_name,
    phone_number: cus_phone,
    taker_fname: taker_fname,
    taker_lname: care_lname,
    taker_number: care_phone,
    service: service
  })
   await axios.put(`/dactivity/${toEdit._id}`,json,
   {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    
  }).then((response)=>{

   

 console.log(response);

  }).catch(error=>{

    
    console.log(error);
  })

  }
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
          {error?<p className="text-red-500 mt-2">Some Fields shouldn't be left empty</p>:null}
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
                value={plate}
                onChange={(e)=>{
                  handleBlur(e);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
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
                  onChange={(e)=>{
                  handleBlur(e);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
        
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
                onChange={(e)=>{
                  handleBlur(e);
                }}
                value={cus_name}
                InputLabelProps={{
                  shrink: true,
                }}

              />
            

              <TextField
                margin="dense"
                label="Phone Number"
                variant="outlined"
                name="cus_phone"
                value={cus_phone}
                size="small"
                className={classes.width}
                onChange={(e)=>{
                  handleBlur(e);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
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
                <InputLabel>Select</InputLabel>
                <Select label="Service"
                onChange={(e)=>{
                  setService (e.target.value);      
                      
               }}

                >
              
              {serviceList?serviceList.map((s)=>{
        return(
          <MenuItem value={s._id}>{s.name}</MenuItem>
        )
              }):null}
             
       
          
                 
                </Select>
              </FormControl>
              
              <br></br>
              <TextField
                margin="dense"
                id="date"
                label="Entry Date"
                defaultValue={entry_date}
                variant="outlined"
                type="date"
                name="entry_date"
                size="small"
                className={classes.width}
                onChange={(e)=>{setEntryDate(e.target.value);
                }

                  
                }
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
              defaultValue={out_date}
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
                value={taker_fname}
                className={classes.width}
                name="care_fname"
                size="small"
                 onChange={
                  (e)=>{
                    handleBlur(e);
                  }
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
              
              
              <TextField
                margin="dense"
                label="Last Name"
                variant="outlined"
                className={classes.width}
                size="small"
                name="care_lname"
                value={care_lname}
                 onChange={
                  (e)=>{
                    handleBlur(e);
                  }
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
             
              <TextField
                margin="dense"
                label="Phone Number"
                value={care_phone}
                variant="outlined"
                className={classes.width}
                size="small"
                name="care_phone"

                onChange={
                  (e)=>{
                    handleBlur(e);
                  }
                }
                InputLabelProps={{
                  shrink: true,
                }}
                
              />
            
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                className={`${classes.blueBut} ${classes.width} ${classes.low}`}
                onClick={()=>{
                 
               setToEdit("");
               history.push("/app/dayservices");
                }}
                color="primary"
              >
               Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.greenBut} ${classes.width} ${classes.low}`}
                onClick={()=>{
                  submit();
                }}
                
              >
              Save
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
