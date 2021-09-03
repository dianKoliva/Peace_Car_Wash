/* eslint-disable no-unused-vars */
import { Grid, TextField, Typography, makeStyles } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import React, { useContext } from "react";
import Dashboard from "../../layout/Dashboard";
import { MyContext } from "../../MyContext";

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
  var month=dat.getMonth();
  month+=1;
  var final=`${dat.getFullYear()}-${month}-${dat.getDate()}`
  const classes = useStyles();

  const[agree,setAgree]=React.useState(false);
  const[complete,setComplete]=React.useState(false);
  const[amount,setAmount]=React.useState();
  const[date,setDate]=React.useState();
  const{toBepayed,setToBePayed}=useContext(MyContext)
  console.log(toBepayed);
  const handleAgree = (event) => {
    setAgree(event.target.checked);
  };
  const handleComp=(event)=>{
 setComplete(event.target.checked)
  }

function  handleChange(e){
if(e.target.name==="date"){
  setDate(e.target.value)
}
else if(e.target.name==="amount"){
setAmount(e.target.value)
}
  }

  function save(){
  
  }
  return (
    <Dashboard>
    <div>
      <Grid  container spacing={3}>
     
        <Grid container  className={classes.margin}>
          <Grid item xs={12
          
          }>
            <p className="text-lg font-bold">Payment for {toBepayed}</p>
          </Grid>
          <Grid item xs={6} className={classes.inputmag}>
            <TextField
              margin="dense"
              label="Amount"
              variant="outlined"
              size="small"
              className={classes.width}
              name=""
              value={amount}
              
            />
        
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                checked={agree}
                onChange={handleAgree}
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
              value={date}
              size="small"
              className={classes.width}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e)=>handleChange(e)}
            />
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                checked={complete}
                onChange={handleComp}
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
                Back
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.greenBut} ${classes.width} ${classes.low}`}
                onClick={save()}
              >
                Pay
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
