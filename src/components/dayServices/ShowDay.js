/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext,useEffect ,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "../../layout/Dashboard";
import { useHistory } from 'react-router-dom';
import { Paper } from "@material-ui/core";




const useStyles = makeStyles({
  root: {
    width: "50%",
    marginLeft:"20%",
    marginTop:"10%"
  },
 
});




export default function StickyHeadTable() {
  const classes = useStyles();
  const state = useHistory();
  const  data  = state.location.state.data;

 
  return (
    <Dashboard>
    <Paper className={classes.root}>
     <p className="text-sm font-bold p-4">Car Details</p>


     {/* amount_payed: 5002000
amount_to_pay: 2000
car_type: "bus"
customer_name: "Uwizeye kampariza"
entry_date: "2021-09-17T00:00:00.000Z"
out_date: "2021-09-17T23:03:43.521Z"
phone_number: "0788132345"
plate_number: "RAC2034"
registered_by: {user_status: 'ACTIVE', registration_date: 'Sun Sep 12 2021', _id: '613df4909177670016171f06', first_name: 'Yvet', last_name: 'Gahamanyi', …}
seen: false
service: ['washing']
status: "COMPLETE"
taker_fname: "uwizeye tuyishime"
taker_lname: "string"
taker_number: "0788132345" */}




<div className="flex pb-4">
    <div className="ml-14">

<div className="flex">
    <p>Plate number:</p>
    <p>o---</p>
</div>
<div className="flex">
    <p>Plate number</p>
    <p>o---</p>
</div>
<div className="flex">
    <p>Plate number</p>
    <p>o---</p>
</div>
<div className="flex">
    <p>Plate number</p>
    <p>o---</p>
</div>
<div className="flex">
    <p>Plate number</p>
    <p>o---</p>
</div>

    </div>


    <div className="ml-14">



    <div className="flex">
    <p>Plate number</p>
    <p>o---</p>
</div>
<div className="flex">
    <p>Plate number</p>
    <p>o---</p>
</div>
<div className="flex">
    <p>Plate number</p>
    <p>o---</p>
</div>
<div className="flex">
    <p>Plate number</p>
    <p>o---</p>
</div>
<div className="flex">
    <p>Plate number</p>
    <p>o---</p>
</div>


    </div>
</div>



    </Paper>
    </Dashboard>
  );
}

/* eslint-disable no-unused-vars */