import React, { useState } from "react";
import bg from "../images/bg.jpg";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";



const useStyles = makeStyles((theme) => ({
  root: {
    height: "80hv",
    marginTop: "30px",
  },
  image: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignUpSide() {
  const classes = useStyles();
  const [data,setData]=useState({first_name:null,last_name:null,phone:null,password:null,remember:false})
  const handleInputs=(e)=>{
  var name=e.target.name;
  var value=e.target.value; 
  if(e.target.type === 'checkbox'){
    if(e.target.checked){
        setData({"remember":true}) 
    }
    else{
      setData({"remember":false})
    }
  }
  else{
    setData({[name]:value});
  }
  }



  const handleSubmit=()=>{
    for(var d in data){
      console.log(data[d]);
    }
  }
  



  return (
    <div className="w-2/3 h-96 ml-52">
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square >
          <div className={classes.paper}>

            <div className=" mb-4">
              <Typography variant="h6">Sign Up to Peace Carwash</Typography>
              <Typography className="text-gray-500" variant="body2">
                Sign In into the car wash, mechanic and rent management platform
              </Typography>
            </div>
            <div className="text-red-500 text-sm"> 
  
   </div>
            

            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="first_name"
                autoComplete="first_name"
                size="small"
                
                autoFocus
                inputProps={{ spellCheck: 'false' }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lname"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                autoFocus
                size="small"
                inputProps={{ spellCheck: 'false' }}
               
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone number"
                name="phone"
                autoComplete="phone number"
                autoFocus
                size="small"
              
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
                
              />
              <FormControlLabel
                control={
                  <Checkbox value="remember" name="remember"   color="primary" fontSize="small" />
                }
                label={
                  <span style={{ fontSize: "0.9em", color: "#9c9c9c" }}>
                    Rember me
                  </span>
                }
              />
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
               
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Already Have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
      </Grid>
    </div>
  );
}
