/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MyContext } from '../../MyContext';
import axios from 'axios'
import { set } from 'lodash';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();
  const [data,setData]=useState();
  const {reporter,setReporter}=useContext(MyContext);
  const {token,setToken}=useContext(MyContext);

  async function nyabu(){
    await axios.get('/night.ng',
    {
     headers: {
       'Authorization':token
    }
     
   }).then((response)=>{
     setData(response.data);
     console.log(data);
     
  
    
   }).catch(error=>{
     console.log(error);
   })
  }

  async function rem(){
    await axios.get('/night.rm',
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
  if(reporter.branch==="nyabugogo"){
nyabu();
  }
  else{
    rem();
  }
   nyabu();
  },[])

  useEffect(()=>{

    if(reporter.type==="daily"){
      let info = data.filter((d) => d.entry_date.split("T")[0] === reporter.from);
      setData(info);
    }
    else{
      let info = data.filter((d) => d.entry_date("T")[0] >= reporter.from && d.record_date.split("T")[0] <= reporter.from);
      setData(info);
    }

  },[data])

  function gen()
  {
  
  
    const input = document.getElementById('print');  
      html2canvas(input)  
        .then((canvas) => {  
          var imgWidth = 200;  
          var imgHeight = canvas.height * imgWidth / canvas.width;  
          var heightLeft = imgHeight;  
          const imgData = canvas.toDataURL('image/png');  
          const pdf = new jsPDF('p', 'mm', 'a4')  
          var position = 0;  
          var heightLeft = imgHeight;  
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
          pdf.save("download.pdf");  
        }); 
    }  

  return (
    <div>
      {data?
      <div>
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table" id="print">
        <TableHead>
          <TableRow>
            <TableCell align="center">Number</TableCell>
            
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Car Type</TableCell>
            <TableCell align="center">Plate number</TableCell>
            <TableCell align="center">Observation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?data.map((row,index) => (
            <TableRow key={row.name}>
              <TableCell  align="center">
                {index+1}
              </TableCell>
              <TableCell align="center">{row.entry_date}</TableCell>
              <TableCell align="center">{row.car_type}</TableCell>
              <TableCell align="center">{row.plate_number}</TableCell>
              <TableCell align="center">{row.washed===true?"OK":"NO"}</TableCell>
            </TableRow>
          )):null}
        </TableBody>
      </Table>
      
    </TableContainer>
    <div className="mt-4 ml-10">
    <Button  variant="contained" color="primary" onClick={()=>{gen()}} >Print Report</Button>
    </div>
    </div>
    :<p className="text-red-500">No records available</p>}
    </div>
  );
}
