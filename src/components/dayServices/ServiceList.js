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
import { MyContext } from "../../MyContext";
import Dashboard from "../../layout/Dashboard";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

const columns = [
  { id: "plate_number", label: "Plate_no", minWidth: 100, align: "left" },
  { id: "customer_name", label: "Customer", minWidth: 170, align: "left" },
  { id: "phone_number", label: "Phone_no", minWidth: 100, align: "left" },
  { id: "entry_date", label: "Entry Date", minWidth: 100, align: "left" },
  { id: "out_date", label: "Out Date", minWidth: 100, align: "left" },
  { id: "car_type", label: "Car Type", minWidth: 100, align: "left" },
  { id: "services", label: "Service", minWidth: 100, align: "left" },
  { id: "payement", label: "Amount", minWidth: 100, align: "left" },
  { id: "observation", label: "status", minWidth: 100 },
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
    maxHeight: 440,
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


  async function fetch(){
    await axios.get('/dactivity',
    {
     headers: {
       'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjgxNWUyY2Q3ZjJmMzdmYzYzNWFlNiIsInBob25lX251bWJlciI6IjA3OTA2MDAwMDAiLCJmaXJzdF9uYW1lIjoiVGVzdGVyIiwibGFzdF9uYW1lIjoiQWRtaW4iLCJyb2xlIjpudWxsLCJwYXNzd29yZCI6ImFkbWluMTIzIiwiaWF0IjoxNjMwNDMwNzMwLCJleHAiOjE2MzA1MTcxMzB9.HDle_1vNHJvffCk2LfWJBYPqneuryG8kOiOySZuPAtU"
     }
     
   }).then((response)=>{
     setData(response.data.activities);
     
    
   }).catch(error=>{
     console.log(error);
   })
   }


  useEffect(()=>{
  
   
   fetch()

  },[])




  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const history=useHistory();

  return (
    <Dashboard>
    <Paper className={classes.root}>
      <Grid container spacing={3} >
        <Grid item xs={10}>
          <div className="flex ml-4 mb-6 mt-4 ">
            <p className="font-bold">List of vehicles</p>
            <p className="text-sm text-gray-500 ml-2">{data.length} total</p>
          </div>
        </Grid>
        <Grid item xs={2}
        >
          <div className="ml-6 mb-2 mt-1">
            <Button variant="outlined" color="primary" className="w-32" onClick={()=>{history.push("/app/dayservices/register")}}>
              New Record
            </Button>
          </div>
        </Grid>
      </Grid>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column,index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="classes.background"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?data.map((data,index)=>{
              return(
              <TableRow hover role="checkbox" tabIndex={-1} key={index} >
{columns.map((col,index)=>{

if(col.id==="action"){
  return(
<TableCell key={index} align={col.align}>
<IconButton size="small"  >
  <CreateIcon  fontSize="small" className="text-gray-500"></CreateIcon>
  </IconButton>
  <IconButton size="small">
  <DeleteIcon fontSize="small" className="text-gray-500" ></DeleteIcon>
  </IconButton>   
                          </TableCell>
  )
}
else{
const value = data[col.id];
  return(
 <TableCell key={index} align={col.align}>
                            {value}
                          </TableCell>
  )
}
})}
                </TableRow>
              )
            }):null}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Dashboard>
  );
}

/* eslint-disable no-unused-vars */