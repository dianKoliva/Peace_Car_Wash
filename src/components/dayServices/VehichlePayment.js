/* eslint-disable no-unused-vars */
import { Grid, TextField, Typography, makeStyles } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import React from "react";
import Dashboard from "../../layout/Dashboard";

const useStyles = makeStyles((theme) => ({
  width: {
    width: "70%",
  },
  margin: {
    marginLeft: "10em",
    marginTop: "10em",
  },
  greenBut: {
    backgroundColor: "#4AAF05",
    color: "white",
  },
  blueBut: {
    backgroundColor: "#1665D8",
    color: "white",
  },
  inputmag: {
    marginTop: "10px",
  },
}));
function VehichlePayment(props) {
  var dat=new Date();
  var final=`${dat.getFullYear()}-${dat.getMonth()}-${dat.getDate()}`
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const[agree,setAgree]=React.useState(false);
  const[complete,setComplete]=React.useState(false);
  const[amount,setAmount]=React.useState();
  const[date,setDate]=React.useState(final);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Dashboard>
    <div>
      <Grid  container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h6">Service Payment</Typography>
        </Grid>
        <Grid container  className={classes.margin}>
          <Grid item xs={12
          
          }>
            <p className="text-lg font-bold">Pay for vehicle services</p>
          </Grid>
          <Grid item xs={6} className={classes.inputmag}>
            <TextField
              margin="dense"
              label="Amount"
              variant="outlined"
              size="small"
              className={classes.width}
              name=""
              onBlur={(e)=>{
              if(e.target.value===""){
                setAmount("n")
              }
              else{
                setAmount(e.target.value);
              }
              }}
            />
            {amount==="n"?<p className="text-red-500 text-sm" >Amount required</p>:null}
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                checked={checked}
                onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                name="agree"
              />
              }
              label="Accept Terms and Conditions"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              margin="dense"
              id="date"
              label="Payement Date"
              variant="outlined"
              type="date"
              defaultValue="2017-05-24"
              size="small"
              className={classes.width}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                checked={checked}
                onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                name="complete"
              />
              }
              label="Completed Payment"
            />
          </Grid>
          <Grid  container spacing={3} className={classes.inputmag}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.blueBut} ${classes.width} ${classes.low}`}
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.greenBut} ${classes.width} ${classes.low}`}
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

export default VehichlePayment;
