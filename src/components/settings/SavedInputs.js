/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Grid, makeStyles } from "@material-ui/core";
import { Paper, TextField, Divider, Button } from "@material-ui/core";
import { MyContext } from "../../MyContext.js";
import jwt from 'jwt-decode';
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: "10px",
  },
  marginBottom: {
    marginBottom: "10px",
    marginLeft: "20%",
  },
  height: {
    height: "20%",
  },
  button: {
    minWidth: "30%",
    marginLeft: "20px",
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

export default function SavedInputs() {
  const classes = useStyles();
  const {user,setUser}=useContext(MyContext);
  const {token,setToken}=useContext(MyContext);
  const [log,setLog]=useState();
  setUser(jwt(token))

  async function fetch(){

    await axios.get(`/users/${user.id}`,
    {
     headers: {
       'Authorization':token
     }
     
   }).then((response)=>{
    
   setLog(response.data);
   console.log(log)
  
   }).catch(error=>{
     console.log(error); 
   })
  }

  useEffect(()=>{
   fetch() 
  },[])
  return (
    <Paper>
      <Grid container xs="12">
        <Grid item xs="12">
          <div className="flex mt-2 mb-2">
            <p className=" font-bold ml-4"> Basic Profile </p>
            <p className="ml-4 text-sm text-gray-500">
              You can change your profile
            </p>
          </div>
          <Divider></Divider>
        </Grid>
        <Grid container xs="6">
          <form noValidate autoComplete="off" className={classes.marginBottom}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              size="small"
              value={user.first_name}
              className={classes.margin}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              className={classes.margin}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              size="small"
            />
          </form>
        </Grid>
        <Grid xs="6" container>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              className={classes.margin}
              size="small"
              value={user.last_name}
            />
            <TextField
              id="outlined-basic"
              label="
                Phone Number"
              variant="outlined"
              size="small"
              className={classes.margin}
              value={user.phone_number}
            />
          </form>
        </Grid>
        <Grid item xs="12">
          <Divider></Divider>
        </Grid>
        <Grid item xs="12">
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            className={classes.button}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
