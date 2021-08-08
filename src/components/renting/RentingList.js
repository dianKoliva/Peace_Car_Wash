import React from "react";
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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import { Grid } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const columns = [
  { id: "plot", label: "Plot Id", minWidth: 100, align: "left" },
  { id: "customer", label: "Customer", minWidth: 100, align: "left" },
  { id: "date", label: "Date", minWidth: 100, align: "left" },
  { id: "status", label: "Status", minWidth: 100, align: "left" },
  { id: "actions", label: "Actions", minWidth: 100, align: "left" },
];

function createData(plot, customer, date, status, actions) {
  return {
    plot,
    customer,
    date,
    status,
    actions,
  };
}

const rows = [
  createData("23412355-2", "Gisa Kaze Fredson", "04/28/2021", "payed"),
  createData("23412355-2", "Gisa Kaze Fredson", "04/28/2021", "incomplete"),
  createData("23412355-2", "Gisa Kaze Fredson", "04/28/2021", "pending"),
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
            <p className="font-bold">List of Renters</p>
            <p className="text-sm text-gray-500 ml-2">{rows.length} total</p>
          </div>
        </Grid>
        <Grid item xs="2">
          <div className="ml-6 mb-2 mt-1">
            <Button variant="outlined" color="primary" className="w-32">
              New Record
            </Button>
          </div>
        </Grid>
      </Grid>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.plot}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      if (column.id === "actions") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <MoreVertIcon
                              className="ml-1 text-gray-500"
                              fontSize="small"
                            ></MoreVertIcon>
                            <EditIcon
                              fontSize="small"
                              className="ml-2 text-gray-500"
                            ></EditIcon>
                          </TableCell>
                        );
                      } else if (column.id === "status") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value === "payed" ? (
                              <p className="text-green-400">{value}</p>
                            ) : value === "incomplete" ? (
                              <p className="text-yellow-400">{value}</p>
                            ) : (
                              <p className="text-red-400">{value}</p>
                            )}
                          </TableCell>
                        );
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