const express  = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require("cors")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.listen(1000)
app.use(cors())
app.use(express.json())

console.log("Server Up")
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"travel"
})


app.post("/forms",(req,res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const distance = req.body.distance;
    const start = req.body.start;
    const startpin = req.body.startpin;
    const arriving = req.body.arriving;
    const destpin = req.body.destpin;
    const date = req.body.date;
    const departure = req.body.departure;
    const seat = req.body.seat;
    const tot = req.body.tot;
    const fare = req.body.fare;
    const transporttype = req.body.transporttype;
    const vehicleno = req.body.vehicleno;
    const ticket = req.body.ticket;
    const booking = req.body.booking;
    const verification = req.body.verification;
    console.log(name)

    db.query("INSERT INTO passenger VALUES (?,?,?,?,?,?,?)",
    [booking,name,age,gender,start,verification,startpin],
    (err,result) => {
        if(err){
            console.log(err)
            res.send("Data Not Added")
        }
        else {
            res.send("Data Added Successfully")
        }
    })
    
    db.query("INSERT INTO mode_transport VALUES (?,?,?)",
    [vehicleno,booking,transporttype],
    (err,result) => {
        if(err){
            console.log(err)
            console.log("Transport Data Not Added")
        }
        else {
            console.log("Transport Added Successfully")
        }
    })

    db.query("INSERT INTO ticket VALUES (?,?,?,?,?,?)",
    [ticket,vehicleno,date,departure,seat,distance],
    (err,result) => {
        if(err){
            console.log(err)
            console.log("Ticket Data Not Added")
        }
        else {
            console.log("Ticket Added Successfully")
        }
    })
    
    db.query("INSERT INTO destination VALUES (?,?,?)",
    [destpin,ticket,arriving],
    (err,result) => {
        if(err){
            console.log(err)
            console.log("Destination Data Not Added")
        }
        else {
            console.log("Destination Added Successfully")
        }
    })
    
    db.query("INSERT INTO cost VALUES (?,?,?)",
    [ticket,fare,tot],
    (err,result) => {
        if(err){
            console.log(err)
            console.log("Cost Data Not Added")
        }
        else {
            console.log("CostData Added Successfully")
        }
    })
    
})

app.get("/view",(req,res) => {
    db.query("SELECT * FROM passenger",(err,result) => {
        if(err){
            console.log(err)
        }
        else {
            res.send(result)
            console.log(result)
        }
    })
})


app.post("/start",(req,res) => {
    const start_query = req.body.start
    console.log(start_query)

    db.query("SELECT * FROM travel.passenger WHERE start_place= "+mysql.escape(start_query),(err,result) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            res.send(result)
        }
    })
})

app.post("/transtype",(req,res) => {
    const transtype = req.body.transtype
    console.log(transtype)

    db.query("select p.booking_id,name,age,gender,verification_id,start_place,transport_no FROM passenger p,Mode_transport mt where p.booking_id=mt.booking_id and transport_type= "+mysql.escape(transtype),(err,result) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            res.send(result)
        }
    })
})

app.post("/Date",(req,res) => {
    const date = req.body.date
    console.log(date)

    db.query("select p.booking_id,name,age,gender,verification_id,start_place,ticket_id,seat_no,transport_type from passenger p,ticket t,mode_transport mt where p.booking_id=mt.booking_id and mt.transport_no=t.transport_no and t.ticket_date= "+mysql.escape(date),(err,result) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            res.send(result)
        }
    })
})

app.post("/Dest",(req,res) => {
    const destination_ = req.body.destination
    console.log(destination_)

    db.query("select p.booking_id,verification_id,name,age,gender,start_place,transport_type from passenger p,mode_transport mt,ticket t,destination d where p.booking_id=mt.booking_id and mt.transport_no=t.transport_no and t.ticket_id=d.ticket_id and d.arrival_place= "+mysql.escape(destination_),(err,result) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            res.send(result)
        }
    })
})
