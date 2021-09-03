/* eslint-disable no-unused-vars */
import { Grid, TextField, Typography, makeStyles } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import React from "react";
import Dashboard from "../../layout/Dashboard";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  width: {
    width: "70%",
  },
  margin: {
    marginLeft: "10em",
    marginTop: "5em",
  },
  otherMargin: {
    marginTop: "20em",
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
  othermargin: {
    marginTop: "30px",
  },
}));
function RentingPayment(props) {
  const classes = useStyles();
  const history=useHistory();
  return (
    <Dashboard>
    <div>
      <Grid xs="12" container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h6">Rent Payment</Typography>
        </Grid>
        <Grid container xs="12" className={classes.margin}>
          <Grid item xs="12">
            <p className="text-lg font-bold">
              Make Payment For Rent in Peace Car Wash
            </p>
            <p className="text-sm text-gray-500">
              Pay now individual or group to rent place where they can establish
              their workings
            </p>
          </Grid>
          <Grid item xs="6" className={`${classes.othermargin}`}>
            <TextField
              margin="dense"
              label="Amount"
              variant="outlined"
              size="small"
              className={classes.width}
            />
            <br></br>
            <FormControlLabel
              className={`${classes.inputmag}`}
              control={
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              }
              label="Accept Terms and Conditions"
            />
          </Grid>

          <Grid item xs="6" className={`${classes.othermargin}`}>
            <TextField
              margin="dense"
              id="date"
              label="Payement Date"
              variant="outlined"
              type="date"
              size="small"
              className={classes.width}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br></br>
            <FormControlLabel
              className={`${classes.inputmag}`}
              control={
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              }
              label="Completed Payment"
            />
          </Grid>
          <Grid xs={12} container spacing={3} className={classes.inputmag}>
            <Grid item xs={6}>
              <Button
               onClick={()=>{
                // setPayRent(true);
                // setNewRenter(false)
                history.goBack()
              }}
                variant="contained"
                color="primary"
                className={`${classes.blueBut} ${classes.width} ${classes.low}`}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
               onClick={()=>{
                // setPayRent(true);
                // setNewRenter(false)
                history.push("/app/rent")
              }}
                variant="contained"
                color="primary"
                className={`${classes.greenBut} ${classes.width} ${classes.low}`}
              >
                Finish
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </Dashboard>
  );
}

export default RentingPayment;

/* eslint-disable no-unused-vars */
