/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { MyContext } from '../../../MyContext';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
  minWidth:"700"
  },
wid:{
  width:"50%"
},
bol:{
  fontWeight:"bold"
}
});


function Daily(){

  const {invoicer,setInvoicer}=useContext(MyContext);
  const {token,setToken}=useContext(MyContext);
  const [data,setData]=useState("");
  const [coaster,setCoaster]=useState(0);
  const [bus,setBus]=useState(0);
  const [cunit,setCunit]=useState(0);
  const [bunit,setBunit]=useState(0);
  const classes=useStyles();

  async function nyabu(){
    await axios.get('/night.ng',
    {
     headers: {
       'Authorization': token
     }
     
   }).then((response)=>{
    setData(response.data)
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
    if(invoicer.branch==="nyabugogo"){
      nyabu();
      
    }
    else {
      rem();
    }
  },[])

  function number(){
  
  }

  useEffect(()=>{
    if(data){
      if(invoicer.from !=="" ){
    let info = data.filter((d) => d.entry_date.split("T")[0] === invoicer.from);
    setData(info)
    if(info){
for(var i=0;i<=info.length;i++){
  console.log("hey")
}
    }
      }
    
     }
  },[data])

 

  function gen()
{


  const input = document.getElementById('print');  
    html2canvas(input)  
      .then((canvas) => {  
        var imgWidth = 200;  
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        
        const imgData = canvas.toDataURL('image/png');  
        const pdf = new jsPDF('p', 'mm', 'a4')  
        var position = 0;  
        var heightLeft = imgHeight;  
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
        pdf.save("download.pdf");  
      }); 


}
    return(
        <div id="print">
           <div className="flex ml-96 mt-20">
      <TextField
                margin="dense"
                label="Coaster unit price"
                variant="outlined"
                name="plate"
                size="small"
                className={classes.width}
               value={cunit}
               onChange={(e)=>setCunit(e.target.value)}
              />
              <div className="ml-6">

              </div>
               <TextField
                margin="dense"
                label="Bus unit price"
                variant="outlined"
                name="plate"
                size="small"
                className={`${classes.width} `}
                 value={bunit}
                onChange={(e)=>setBunit(e.target.value)}
              />
      </div>
          <div className="ml-96 mt-10 " >
          <p className="font-bold underline mb-6">List of Car washed in one day/Nyabugogo</p>
            <table className="border-solid border-2 border-black  border-collapse">
            <thead className="border-solid border-2 border-black  border-collapse ">
              <tr className="border-solid border-2 border-black border-collapse ">
                <th className="text-left py-4 text-gray-600  border-solid border-2 border-black p-4">Date</th>
                <th className="text-left  text-gray-600  border-solid border-2 border-black p-4">Car Type</th>
                <th className="text-center  text-gray-600  border-solid border-2 border-black p-4">Quantity</th>
                <th className="text-center text-gray-600 border-solid border-2 border-black p-4">Unit Price</th>
                <th className="text-center  text-gray-600 border-solid border-2 border-black p-4">Net Price</th>
                <th className="text-center  text-gray-600 border-solid border-2 border-black p-4">Vat 18%</th>
                <th className="text-center  text-gray-600  border-solid border-2 border-black p-4">Total Price</th>
              </tr>
            </thead>
  
    
<tbody>
  <tr >
  <td className="border-solid border-2 border-black p-4"> {invoicer.from}</td>
    <td  className="border-solid border-2 border-black p-4">Bus</td>
    <td className="border-solid border-2 border-black p-4">{bus}</td>
    <td className="border-solid border-2 border-black p-4">{bunit}</td>
    <td className="border-solid border-2 border-black p-4"></td>
    <td className="border-solid border-2 border-black p-4"></td>
    <td className="border-solid border-2 border-black p-4" ></td>
  </tr>
  <tr >
  <td className="border-solid border-2 border-black p-4"></td>
    <td  className="border-solid border-2 border-black p-4">Coaster</td>
    <td className="border-solid border-2 border-black p-4">{coaster}</td>
    <td className="border-solid border-2 border-black p-4">{cunit}</td>
    <td className="border-solid border-2 border-black p-4"></td>
    <td className="border-solid border-2 border-black p-4"></td>
    <td className="border-solid border-2 border-black p-4" ></td>
  </tr>

  <tr>
  <td className="border-solid border-2 border-black p-4" colSpan="2">Total</td>
    
    <td className="border-solid border-2 border-black p-4 " colSpan="2">105</td>
    
    <td className="border-solid border-2 border-black p-4">34545</td>
    <td className="border-solid border-2 border-black p-4">898989</td>
    <td className="border-solid border-2 border-black p-4" >899898</td>
  </tr>
  
  </tbody>
</table>
        </div>
        <div className="ml-96 mt-4">
        <Button variant="contained" onClick={()=>{gen()}} color="primary">Generate pdf</Button>
        </div>
       
        
        </div>
    )


}

export default Daily;