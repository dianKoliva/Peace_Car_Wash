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
import { MyContext } from "../../MyContext";
import Dashboard from "../../layout/Dashboard";
import axios from 'axios';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { useHistory } from 'react-router-dom';

const columns = [
  { id: "plate_number", label: "Plate_no", minWidth: 100, align: "left" },
  { id: "customer_name", label: "Customer", minWidth: 170, align: "left" },
  { id: "phone_number", label: "Phone_no", minWidth: 100, align: "left" },
  { id: "entry_date", label: "Entry Date", minWidth: 100, align: "left" },
  { id: "car_type", label: "Car Type", minWidth: 100, align: "left" },
  { id: "service", label: "Service", minWidth: 100, align: "left" },
  { id: "amount_to_pay", label: "Amount", minWidth: 100, align: "left" },
  { id: "status", label: "Status", minWidth: 100 },
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
  const {toBePayed,setToBePayed}=useContext(MyContext);
  const {search,setSearch}=useContext(MyContext);
  const {toEdit,setToEdit}=useContext(MyContext);


  const deleter=async(index)=>{

    var id=data[index]._id;

    await axios.delete(`/nactivity/${id}`,
    {
     headers: {
       'Authorization': token
     }
     
   }).then((response)=>{
     
fetch();
   }).catch(error=>{

   })



  }

  async function fetch(){
    await axios.get('/nactivity',
    {
     headers: {
       'Authorization':token
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


  const edit=(index)=>{
 setToEdit(data[index]);
  }


  const pay=(index)=>{
    setToBePayed(data[index]);

  }

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
            <Button variant="outlined" color="primary" className="w-32" onClick={()=>{history.push("/app/nightservices/register")}}>
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
            {data?data.filter((val)=>{
              if(search===""){
                return val;
              }
              else if(val.customer_name.toLowerCase().includes(search.toLowerCase())||val.service.toLowerCase().includes(search.toLowerCase())||
              val.plate_number.toLowerCase().includes(search.toLowerCase())
              ){
              return val;
              }
            }).map((data,num)=>{
              
              return(
              <TableRow hover role="checkbox" tabIndex={-1} key={num} >
{columns.map((col,index)=>{

 

const value = data[col.id];
if(col.id==="action"){
  
  return(
<TableCell key={index} align={col.align}>
<IconButton value={index} size="small"  onClick={()=>edit(num)}>
  <CreateIcon   fontSize="small" className="text-gray-500"></CreateIcon>
  </IconButton>
  <IconButton size="small"   onClick={()=>deleter(num)} >
  <DeleteIcon   fontSize="small" className="text-gray-500"></DeleteIcon>
  </IconButton>

                          </TableCell>
  )
}else if(col.id==="status"){
  return(
  <TableCell key={index} align={col.align} >
  {value==="PENDING"?
   <Button variant="contained" color="secondary" onClick={()=>pay(num)} className={classes.pending}>
   {value}
 </Button>:value==="INCOMPLETE"? <Button  onClick={()=>pay(num)} variant="contained" color="primary" className={classes.incomplete}>
   {value}
 </Button>:<Button variant="contained" disabled className={classes.buttonWid}>
   {value}
</Button>}
  
</TableCell>
  )
}
else{

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