import React, { useContext } from "react";
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
import { Grid } from "@material-ui/core";
import { MyContext } from "../../MyContext";

const columns = [
  { id: "plate", label: "Plate_no", minWidth: 100, align: "left" },
  { id: "customer", label: "Customer", minWidth: 170, align: "left" },
  { id: "phone", label: "Phone_no", minWidth: 100, align: "left" },
  { id: "entry_date", label: "Entry Date", minWidth: 100, align: "left" },
  { id: "out_date", label: "Out Date", minWidth: 100, align: "left" },
  { id: "car_type", label: "Car Type", minWidth: 100, align: "left" },
  { id: "services", label: "Service", minWidth: 100, align: "left" },
  { id: "amount", label: "Amount", minWidth: 100, align: "left" },
  { id: "observation", label: "Observation", minWidth: 100 },
];

function createData(
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

const rows = [
  createData(
    "RCA890G",
    "Gisa Kaze Fredson",
    "07822443838",
    "04/28/2021",
    "04/28/2021",
    "Costa",
    "Repairing",
    300,
    "complete"
  ),
  createData(
    "RCA890G",
    "Gisa Kaze Fredson",
    "07822443838",
    "04/28/2021",
    "04/28/2021",
    "Costa",
    "Repairing",
    300,
    "incomplete"
  ),
  createData(
    "RCA890G",
    "Gisa Kaze Fredson",
    "07822443838",
    "04/28/2021",
    "04/28/2021",
    "Costa",
    "Repairing",
    300,
    "pending"
  ),
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
  const {dayRecord,setDayRecord}=useContext(MyContext);
  const {day,setDay}=useContext(MyContext);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <Grid container spacing={3} xs="12">
        <Grid item xs="10">
          <div className="flex ml-4 mb-6 mt-4 ">
            <p className="font-bold">List of vehicles</p>
            <p className="text-sm text-gray-500 ml-2">{rows.length} total</p>
          </div>
        </Grid>
        <Grid item xs="2">
          <div className="ml-6 mb-2 mt-1">
            <Button variant="outlined" color="primary" className="w-32" onClick={()=>{setDayRecord(true);setDay(false)}}>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.plate}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "observation") {
                        if (value === "complete") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button
                                className={classes.complete}
                                variant="contained"
                                disabled
                              >
                                complete
                              </Button>
                            </TableCell>
                          );
                        } else if (value === "incomplete") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button
                                variant="contained"
                                className={classes.incomplete}
                                color="primary"
                              >
                                incomplete
                              </Button>
                            </TableCell>
                          );
                        } else {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button
                                variant="contained"
                                className={classes.pending}
                                color="primary"
                              >
                                Pending
                              </Button>
                            </TableCell>
                          );
                        }
                      } else {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      }
                    })}
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
  );
}
