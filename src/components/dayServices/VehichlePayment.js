/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Grid, TextField, Typography, makeStyles } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import React, { useContext, useEffect } from "react";
import Dashboard from "../../layout/Dashboard";
import { MyContext } from "../../MyContext";
import axios from 'axios';
import { useHistory } from "react-router-dom";

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
  const[pay,setPay]=React.useState();
  const[payed,setPayed]=React.useState();
  const[date,setDate]=React.useState();
  const[done,setDone]=React.useState();
  const{toBePayed,setToBePayed}=useContext(MyContext)
  const history=useHistory();
  const {token,setToken}=useContext(MyContext);
  const [error,setError]=React.useState(false);


 useEffect(()=>{
   setPay(toBePayed.amount_to_pay);
   setDone(toBePayed.amount_payed);
 },[])

  const handleAgree = (event) => {
    setAgree(event.target.checked);
  };
  const handleComp=(event)=>{
 setComplete(event.target.checked)
  }

function  handleChange(e){

 if(e.target.name==="pay"){
setPay(e.target.value)
}
if(e.target.name==="payed"){
  setPayed(e.target.value)
  }
  }

  const save= async()=>{
    
    if(pay===0||payed===""||pay===""){
 setError(true);
    }
    else{
      setError(false);
    

    var amount_payed=payed;
    if(done>0){
      amount_payed=payed+done;
    }
   
    
    var status;
    if(amount_payed===pay){
    status="COMPLETE"
    }
    else if(amount_payed===0){
    status="PENDING"
    }
    else{
      status="INCOMPLETE"
    }
   
    const json = { 
    
      amount_to_pay: pay,
      amount_payed:amount_payed,
      status:status,
     
    }
     await axios.post(`/dactivity/pay/${toBePayed._id}`,json,
     {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      
    }).then((response)=>{
  
  
  history.push("/app/dayservices");
  
    }).catch(error=>{
  
      
      console.log(error);
    })
  
  }
  
  }
  return (
    <Dashboard>
    <div>
      <Grid  container spacing={3}>
     
        <Grid container  className={classes.margin}>
          <Grid item xs={12
          
          }>
             
            <p className="text-lg font-bold">Payment for {toBePayed.plate_number}</p>
            <p className="mt-2 mb-2 text-xs">Already payed: {toBePayed.amount_to_pay}</p>
            {error?<p className="text-red-500 mt-4">Fields can't be empty</p>:null}
          </Grid>
         
          <Grid item xs={6} className={classes.inputmag}>
            
            <TextField
              margin="dense"
              label="Amount to pay"
              variant="outlined"
              size="small"
              className={classes.width}
              name="pay"
              value={pay}
              InputLabelProps={{
                shrink: true,
              }}
               onChange={(e)=>handleChange(e)}
            />
        
            <br></br>
          
          </Grid>

          <Grid item xs={6}>
          
          <TextField
              margin="dense"
              label="Payment"
              variant="outlined"
              size="small"
              onChange={(e)=>handleChange(e)}
              className={classes.width}
              name="payed"
              value={payed}
              InputLabelProps={{
                shrink: true,
              }}
              
            />
            <br></br>
           
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
                onClick={()=>save()}
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
