/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext,useEffect ,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Grid, IconButton } from "@material-ui/core";
import { MyContext } from "../../../MyContext";
import Dashboard from "../../../layout/Dashboard";
import axios from 'axios';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { useHistory } from 'react-router-dom';
import { CheckBox, LocalGasStationRounded } from "@material-ui/icons";

const columns = [
  
  { id: "plate_number", label: "Plate_no", minWidth: 100, align: "left" },
  { id: "customer_name", label: "Driver", minWidth: 170, align: "left" },
  { id: "phone_number", label: "Phone_no", minWidth: 100, align: "left" },
  { id: "entry_date", label: "Entry Date", minWidth: 100, align: "left" },
  { id: "car_type", label: "Car Type", minWidth: 100, align: "left" },
  { id: "washed", label: "Washed", minWidth: 100, align: "left" },
  { id: "action", label: "Action", minWidth: 100 },
];

function createData(
  id,
  plate,
  customer,
  phone,
  entry_date,
  out_date,
  car_type,
  services,
  amount,
  observation
) {
  return {
    id,
    plate,
    customer,
    phone,
    entry_date,
    out_date,
    car_type,
    services,
    amount,
    observation,
  };
}



const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 500,
  },
  complete: {
    backgroundColor: "#4AAF05",
    width: "10em",
  },
  incomplete: {
    backgroundColor: "#FB8832",
    width: "10em",
  },
  pending: {
    backgroundColor: "#FF5756",
    width: "10em",
  },
  background: {
    fontWeight: "bold",
  },
});




export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {token,setToken}=useContext(MyContext);
  const [data,setData]=useState("");
  const {toBePayed,setToBePayed}=useContext(MyContext);
  const {search,setSearch}=useContext(MyContext);
  const {toEdit,setToEdit}=useContext(MyContext);


  

  async function fetch(){
    await axios.get('/night.ng',
    {
     headers: {
       'Authorization':token
    }
     
   }).then((response)=>{
     setData(response.data);
     
  
    
   }).catch(error=>{
     console.log(error);
   })
   }


  useEffect(()=>{
  
   
   fetch()

  },[])

  const deleter=async(index)=>{

    var id=data[index]._id;

    await axios.delete(`/night.ng/${id}`,
    {
     headers: {
       'Authorization': token
     }
     
   }).then((response)=>{
     
fetch();
   }).catch(error=>{

   })



  }



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const history=useHistory();


  const edit=(index)=>{
 setToEdit(data[index]);
 history.push("/app/night/nyabugogo/edit");
  }


  return (
    <Dashboard>
    <Paper className={classes.root}>

    </Paper>
    </Dashboard>
  );
}

/* eslint-disable no-unused-vars */