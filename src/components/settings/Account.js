/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
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
import Delete from "@material-ui/icons/Delete";
import CheckIcon from '@material-ui/icons/Check';
import { Grid } from "@material-ui/core";
import { MyContext } from "../../MyContext";
import axios from "axios";


const columns = [
  { id: "names", label: "User", minWidth: 100, align: "left" },
  { id: "date", label: "Date", minWidth: 100, align: "left" },
  { id: "status", label: "Role", minWidth: 100, align: "left" },
  { id: "actions", label: "Actions", minWidth: 100, align: "left" },
];

const rows = [
  ("23412355-2", "Gisa Kaze Fredson", "04/28/2021", "payed"),
  ("23412355-2", "Gisa Kaze Fredson", "04/28/2021", "incomplete"),
  ("23412355-2", "Gisa Kaze Fredson", "04/28/2021", "pending"),
];



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
  const [error, setError] = React.useState('');
  const [data, setData]= React.useState([])
 const {token,setToken}=useContext(MyContext);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fromDatetoDate =(parameter)=>{
    var date=new Date(parameter);
    var month=date.getMonth();
    function check(){
      if(month<10){
        var h=month
        month=`0${h}`
      }
     
    }
     check();
     
   
    var final=`${date.getFullYear()}-${month}-${date.getDate()}`
    return final;
  }

    const getPendingAccounts = async() =>{
    axios({ method: 'post', url: '/users/pending', headers: { 'Authorization':  token } })
        .then(res => setData(res.data))
        .catch(err => console.log(err))
   }
  

  
  useEffect(()=>{
    getPendingAccounts()
  },[]);

  const deleteUser = async(id) =>{
    axios({ method: 'put', url: `/users/${id}`,data: {account_status:"DELETE"} ,headers: { 'Authorization':  token } })
      .then(res => {
          let temp = [...data]
          temp = data.filter(x => x._id !== id)
          setData(temp)
      })
      .catch(err => console.log(err))
  }

  const activateUser = async (id) =>{
    // axios.put(`/users/${id}`, {account_status:"APPROVED"})
    axios({ method: 'put', url: `/users/${id}`,data: {account_status:"APPROVED"} ,headers: { 'Authorization':  token } })
      .then(res => {
          let temp = [...data]
          temp = data.filter(x => x._id === id)
          setData(temp)
      })
      .catch(err => console.log(err))
  }

  return (
      <div className="ml-20 mt-10">
    <Paper className={classes.root}>
      <Grid container spacing={3} xs="12">
        <Grid item xs="10">
          <div className="flex ml-4 mb-6 mt-4 ">
            <p className="font-bold">List of Pending accounts</p>
            <p className="text-sm text-gray-500 ml-2">{data.length} total</p>
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
                  className={classes.background}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={item._id}> 
                    <TableCell >{`${item.first_name}  ${item.last_name}`}</TableCell>
                    <TableCell >{item.registration_date}</TableCell>
                    <TableCell >{item.role.name}</TableCell>
                    <TableCell align="left">
                      <Button onClick={()=>activateUser(item._id)}>
                      <CheckIcon
                        fontSize="small"
                        className="ml-2 text-gray-500"
                        
                      ></CheckIcon>
                      </Button>
                      <Button onClick={()=>
                          deleteUser(item._id)
                        }>
                      <Delete
                        className="ml-1 text-gray-500"
                        fontSize="small"
                        
                      ></Delete>
                      </Button>
                       
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
/* eslint-disable no-unused-vars */