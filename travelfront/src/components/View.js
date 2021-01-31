import React from "react"
import {useState} from "react"
import Axios from "axios"
import "./css/styles.css"
function View(){
    const [viewTable,setViewTable] = useState([])

   const Submit = () => {
       Axios.get("http://localhost:1000/view").then((response) => {
           setViewTable(response.data)
       })
   }
   return(
       <div className="Viewdiv">
       <div class = "container">
       <div className="Button" style={{color:"black"}}>
       <button class = "btn btn-primary" style={{marginBottom:"15px",marginTop:"15px"}} onClick={Submit}>View</button>
       <table style={{width:"100%",color:"black"}}>
                  <tr>
                   <th>Booking_ID</th>
                   <th>Name</th>
                   <th>Age</th>
                   <th>Gender</th>
                   <th>Starting From</th>
                   <th>Verification_ID</th>
                  </tr> 
                    {viewTable.map((val,key) => {
           return(
                    <tr>
                    <td>{val.booking_id}</td>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.gender}</td>
                    <td>{val.start_place}</td>
                    <td>{val.verification_id}</td>
                  </tr> 
           )
       })}</table></div></div></div>
   )
}

export default View