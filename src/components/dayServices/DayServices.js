import { makeStyles, TextField, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

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
  return (
    <div>
      <Grid xs="12" container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h6">Register New Vehicle</Typography>
        </Grid>
        <Grid item xs={12} className={classes.container}>
          <p className="text-lg font-bold">At Service in Peace Car Wash</p>
          <p className="text-gray-500">
            Register new vehicle attending Peace Car Wash Services
          </p>
          <Grid xs={12} container spacing={3} className={classes.margin}>
            <Grid item xs={6}>
              <p className="text-lg text-gray-500">Car Details</p>
              <TextField
                margin="dense"
                label="Plate Number"
                variant="outlined"
                size="small"
                className={classes.width}
              />
              <TextField
                margin="dense"
                label="Car Types"
                variant="outlined"
                // inputProps={{ style: { fontSize: 17 } }}
                // InputLabelProps={{ style: { fontSize: 15 } }}
                size="small"
                className={classes.width}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="text-lg text-gray-500">Customer Details</p>
              <TextField
                margin="dense"
                label="Customer's Name"
                variant="outlined"
                size="small"
                className={classes.width}
              />
              <TextField
                margin="dense"
                label="Phone Number"
                variant="outlined"
                size="small"
                className={classes.width}
              />
            </Grid>
          </Grid>
          <Grid xs={12} container spacing={3} className={classes.margin}>
            <Grid item xs={6}>
              <p className="text-lg text-gray-500">Service</p>
              <FormControl
                variant="outlined"
                size="small"
                className={` ${classes.width}`}
                margin="dense"
              >
                <InputLabel>Age</InputLabel>
                <Select label="Age">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <TextField
                margin="dense"
                id="date"
                label="Entry Date"
                variant="outlined"
                type="date"
                defaultValue="2017-05-24"
                size="small"
                className={classes.width}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                margin="dense"
                id="date"
                label="Estimated out date"
                variant="outlined"
                type="date"
                defaultValue="2017-05-24"
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
                size="small"
              />
              <TextField
                margin="dense"
                label="Last Name"
                variant="outlined"
                className={classes.width}
                size="small"
              />
              <TextField
                margin="dense"
                label="Phone Number"
                variant="outlined"
                className={classes.width}
                size="small"
              />
            </Grid>
          </Grid>
          <Grid xs={12} container spacing={3}>
            <Grid item xs={6}>
              <Button
                variant="contained"
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
  );
}

export default DayServices;