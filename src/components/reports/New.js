import React, { useContext,useEffect ,useState} from "react";

function New(){

    const {theReport,setTheReport}=useState("");

    return(
        <di>
           <button onClick={()=>{
               setTheReport("pipo");
               console.log(theReport);
           }}>hello</button>
        </di>
    )

}

export default New;