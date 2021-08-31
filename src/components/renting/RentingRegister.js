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
import Dashboard from "../../layout/Dashboard";
import { useHistory } from "react-router-dom";

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
    marginTop: "20px",
  },
  otherMarg: {
    marginTop: "30px",
  },
  color: {
    color: "black",
  },
}));

function DayServices() {
  const classes = useStyles();
  const {payRent,setPayRent}=useContext(MyContext);
  const {newRenter,setNewRenter}=useContext(MyContext);
  const history=useHistory();
  return (
    <Dashboard>
    <div>
      <Grid xs="12" container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h6">Add Renter</Typography>
        </Grid>
        <Grid item xs={12} className={classes.container}>
          <p className="text-lg font-bold">Rent In Peace Car Wash</p>
          <p className="text-gray-500">
            Register new individual or group to rent place where they can
            establish their workings
          </p>
          <Grid xs={12} container spacing={3} className={classes.margin}>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                label="First Name"
                variant="outlined"
                size="small"
                className={`${classes.width} ${classes.color}`}
              />
              <TextField
                margin="dense"
                label="Phone Number"
                variant="outlined"
                // inputProps={{ style: { fontSize: 17 } }}
                // InputLabelProps={{ style: { fontSize: 15 } }}
                size="small"
                className={`${classes.width} ${classes.otherMarg}`}
              />
              <TextField
                margin="dense"
                id="date"
                label="Entry Date"
                variant="outlined"
                type="date"
                size="small"
                className={`${classes.width} ${classes.otherMarg}`}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                label="Last Name"
                variant="outlined"
                size="small"
                className={classes.width}
              />
              <TextField
                margin="dense"
                label="What he do"
                variant="outlined"
                size="small"
                className={`${classes.width} ${classes.otherMarg}`}
              />
              <TextField
                margin="dense"
                label="Amount to pay"
                variant="outlined"
                size="small"
                className={`${classes.width} ${classes.otherMarg}`}
              />
            </Grid>
          </Grid>

          <Grid xs={12} container spacing={3}>
            <Grid item xs={6}>
              <Button
              onClick={()=>{
                // setPayRent(true);
                // setNewRenter(false)
                history.push("/app/rent/payment")
              }}
                variant="contained"
                className={`${classes.greenBut} ${classes.width}  ${classes.otherMarg}`}
              >
                CONTINUE WITH PAYMENTS
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
               onClick={()=>{
                history.push("/app/rent")
              }}
                variant="contained"
                color="primary"
                className={`${classes.blueBut} ${classes.width} ${classes.otherMarg}`}
              >
                FINISH
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
/* eslint-disable no-unused-vars */