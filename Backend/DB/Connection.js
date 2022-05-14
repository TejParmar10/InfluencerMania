var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const path = require("path");
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../FrontEnd/build/')));
app.use(bodyParser.urlencoded({ 
    extended: true
}));
mongoose.connect('mongodb://127.0.0.1/InfluencerMania');
var db=mongoose.connection;
    db.on('error',()=>console.log("Error in Connecting to the database"));
if(db.once('open',()=>console.log("Connected to the database")));
// app.get("/signin",(req,res) => {
//   return res.render('Signin');
// });
// app.get("/Home",(req,res) => {
//   return res.render('Home');
// });
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../Frontend/build/index.html"))
})
app.post("/signin",(req,res) => {
  var fname=req.body.fname;
  var lname=req.body.lname;
  var uname=req.body.uname;
  var pass=req.body.pass;
  var data={
      "fname":fname,
      "lname":lname,
      "uname":uname,
      "pass":pass
  }
  console.log(fname,lname,pass);
  db.collection('signup').insertOne(data,(err,collection) => {
      if(err) {
          console.log(err);
      }
      console.log("Record inserted  succesfully");
  });
  return res.redirect('/Home/');
})

app.get("*", (req, res) => {
    res.set({
      "Allow-access-Allow-Origin": "*",
    });
    return res.redirect('/Home/');
  })
  .listen(8800);
console.log("Listening on port 8800");