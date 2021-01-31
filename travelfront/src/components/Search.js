
import React from "react"
import {useState} from "react"
import Axios from "axios"
import "./css/styles.css"
function Search(){
    const [viewTable,setViewTable] = useState([])
    const [start,setStart] = useState()
    const [transtype,setTranstype] = useState()
    const [isTranstypeClicked,setTranstypeClicked] = useState(false)
    const [isStartClicked,setStartClicked] = useState(false)
    const [date,setDate] = useState()
    const [isDateClicked,setDateClicked] = useState(false)
    const [destination,setDestination] = useState()
    const [isDestClicked,setDestClicked] = useState(false)
    
    var byStart = function(){
        setStartClicked(!isStartClicked)
        console.log(isStartClicked)
    }
    var byTranstype = function(){
        setTranstypeClicked(!isTranstypeClicked)
        console.log(isTranstypeClicked)
    }
    var byDate = function(){
        setDateClicked(!isDateClicked)
        console.log(isDateClicked)
    }
    var byDestination = function(){
        setDestClicked(!isDestClicked)
        console.log(isDestClicked)
    }

    const Search_start = function(){
        Axios.post("http://localhost:1000/start",{
        start:start}).then((response) => {
            setViewTable(response.data)
        })
    }

    const Search_transtype = function(){
        Axios.post("http://localhost:1000/transtype",{
        transtype:transtype}).then((response) => {
            setViewTable(response.data)
        })
    }
    const Search_Date = function(){
        Axios.post("http://localhost:1000/Date",{
            date:date}).then((response) => {
                setViewTable(response.data)
            })
    }
    const Search_dest = function(){
        Axios.post("http://localhost:1000/Dest",{
            destination:destination}).then((response) => {
                setViewTable(response.data)
            })
    }
    return(
        <div className="Button" style={{color:"white"}}>
            <button class="btn btn-primary" style={{marginBottom:"25px",marginTop:"25px"}} onClick={byStart}>Search by Starting Place</button>
            {isStartClicked && <div><label style={{marginBottom:"25px",marginTop:"25px"}}>Enter the Starting Place</label><input type="text" onChange={(event) => {setStart(event.target.value)}}/><button onClick={Search_start}>Search</button></div>}
            <button class="btn btn-primary" onClick={byTranstype}>Search by Transport Type</button>
            {isTranstypeClicked && <div><label style={{marginBottom:"25px",marginTop:"25px"}}>Enter the Transport Type</label><input type="text" onChange={(event) => {setTranstype(event.target.value)}}/><button onClick={Search_transtype}>Search</button></div>}
            <button class="btn btn-primary" onClick={byDate}>Search Date</button>
            {isDateClicked && <div><label style={{marginBottom:"25px",marginTop:"25px"}}>Enter the Date</label><input type="date" onChange={(event) => {setDate(event.target.value)}}/><button onClick={Search_Date}>Search</button></div>}
            <button class="btn btn-primary" onClick={byDestination}>Search by Destination</button>
            {isDestClicked && <div><label style={{marginBottom:"25px",marginTop:"25px"}}>Enter the Destination</label><input type="text" onChange={(event) => {setDestination(event.target.value)}}/><button onClick={Search_dest}>Search</button></div>}
        
            <table style={{width:"100%",color:"white"}}>
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
       })}</table></div>
            

    )
}

export default Search