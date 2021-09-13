/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@material-ui/core';
import { MyContext } from '../../../MyContext';
import axios from 'axios';


function Daily(){

  const {invoicer,setInvoicer}=useContext(MyContext);
  const {token,setToken}=useContext(MyContext);
  const [data,setData]=useState("");
  const [coaster,setCoaster]=useState(0);
  const [bus,setBus]=useState(0);
  async function fetch(){
    await axios.get('/night.ng',
    {
     headers: {
       'Authorization': token
     }
     
   }).then((response)=>{
     setData(response.data.activities);
     
   }).catch(error=>{
     console.log(error);
   })
   }

  useEffect(()=>{
fetch();


  },[])

  if(data){
    let c=coaster;
  let b=bus;
    for(let i=0;i>data.length;i++){
      if(data[i].car_type.toLoweCase==="coaster"){
      c++;
       setCoaster( c);
      }
      else{
        b++;
        setBus( b);
      }
  }
  
  
  }

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
    return(
        <div id="print">
          <div className="ml-96 mt-20 " >
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
    <td className="border-solid border-2 border-black p-4"></td>
    <td className="border-solid border-2 border-black p-4"></td>
    <td className="border-solid border-2 border-black p-4"></td>
    <td className="border-solid border-2 border-black p-4" ></td>
  </tr>
  <tr >
  <td className="border-solid border-2 border-black p-4"></td>
    <td  className="border-solid border-2 border-black p-4">Coaster</td>
    <td className="border-solid border-2 border-black p-4">{coaster}</td>
    <td className="border-solid border-2 border-black p-4"></td>
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