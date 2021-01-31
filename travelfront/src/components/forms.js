import React from "react"
import {useState} from "react"
import Axios from "axios"
import "./css/styles.css"

function Forms(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [distance,setDistance] = useState("");
    const [start,setStart] = useState("");
    const [startpin,setStartpin] = useState("");
    const [arriving,setArriving] = useState("");
    const [destpin,setDestpin] = useState("");
    const [date,setDate] = useState("");
    const [departure,setDeparture] = useState("");
    const [seat,setSeat] = useState("");
    const [tot,setTot] = useState("");
    const [fare,setFare] = useState("");
    const [transporttype,setTransporttype] = useState("");
    const [vehicleno,setVehicleno] = useState("");
    const [ticket,setTicket] = useState("");
    const [booking,setBooking] = useState("");
    const [verification,setVerification] = useState("");

    const Submit = () => {
        Axios.post("http://localhost:1000/forms",{
    name:name,
    age:age,
    gender:gender,
    distance:distance,
    start:start,
    startpin:startpin,
    arriving:arriving,
    destpin:destpin,
    date:date,
    departure:departure,
    seat:seat,
    tot:tot,
    fare:fare,
    transporttype:transporttype,
    vehicleno:vehicleno,
    ticket:ticket,
    booking:booking,
    verification:verification,
        }).then((response) => {
            window.alert(response.data)
        }) 
    }

     
      return(
        <body className="FormComponent">
            <div className="mainheading">
        <h1>TRAVEL INFORMATION SYSTEM</h1>
       </div>
       
        <div className="myform">
            <div className="inmyform">
             <label>Name</label>
             <input type="text"  onChange={(event) => {setName(event.target.value)}}/>
             <label>Departure</label>          
             <input type="time" placeholder="" required onChange={(event) => {setDeparture(event.target.value)}}/>
          </div>


           <div className="inmyform">
          <label>Age</label>
          <input type="number" placeholder="0" onChange={(event) => {setAge(event.target.value)}}/>
          <label>Seat</label>          
          <input type="text" placeholder="" required onChange={(event) => {setSeat(event.target.value)}}/>
          </div>

          <div className="inmyform">
          <label>Gender</label>
          <input type="text" placeholder="" onChange={(event) => {setGender(event.target.value)}}/>
          <label>Time of Travel</label>          
          <input type="time" placeholder="" required onChange={(event) => {setTot(event.target.value)}}/>
          </div>

           <div className="inmyform">
          <label>Distance</label>
          <input type="number" placeholder="" onChange={(event) => {setDistance(event.target.value)}}/>
          <label>Fare</label>          
          <input type="number" placeholder="" required onChange={(event) => {setFare(event.target.value)}}/>
          </div>

          <div className="inmyform">
          <label>Starting From</label>
          <input type="text" placeholder="" onChange={(event) => {setStart(event.target.value)}}/>
          <label>Transport Type</label>          
          <input type="text" placeholder="" required onChange={(event) => {setTransporttype(event.target.value)}}/>
          </div>

          <div className="inmyform">
          <label>Pin</label>
          <input type="number" placeholder="" onChange={(event) => {setStartpin(event.target.value)}}/>
          <label>Vehicle No.</label>          
          <input type="text" placeholder="" required onChange={(event) => {setVehicleno(event.target.value)}}/>
          </div>

          <div className="inmyform">
          <label>Arriving At</label>
          <input type="text" placeholder="" onChange={(event) => {setArriving(event.target.value)}}/>
          <label>Ticket ID</label>          
          <input type="text" placeholder="" required onChange={(event) => {setTicket(event.target.value)}}/>
          </div>

          <div className="inmyform">
          <label>Pin</label>
          <input type="number" placeholder="" onChange={(event) => {setDestpin(event.target.value)}}/>
          <label>Booking ID</label>
          <input type="text" placeholder="xxxxxxx" required onChange={(event) => {setBooking(event.target.value)}}/>
          </div>

          <div className="inmyform">
          <label>Date</label>          
          <input type="date" placeholder="" required onChange={(event) => {setDate(event.target.value)}}/>
          <label>Verification ID</label>          
          <input type="text" placeholder="" required onChange={(event) => {setVerification(event.target.value)}}/>
          </div>
          
          <button class="btn btn-primary" onClick = {Submit}>Submit</button>
    </div>
    </body>
)
}

export default Forms