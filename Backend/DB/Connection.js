var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use(express.static('FrontEnd'));
app.use(bodyParser.urlencoded({ 
    extended: false
}));
mongoose.connect('mongodb://127.0.0.1/InfluencerMania');
var db=mongoose.connection;
    db.on('error',()=>console.log("Error in Connecting to the database"));
if(db.once('open',()=>console.log("Connected to the database")));
app.post("/sign_up",(req,res) => {
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
  db.collection('signup').insertOne(data,(err,collection) => {
      if(err) {
          throw  err;
      }
      console.log("Record inserted  succesfully");
  });
  return res.redirect('Home.js');
})
app.get("/", (req, res) => {
    res.set({
      "Allow-access-Allow-Origin": "*",
    });
    return res.redirect('Sigin.js');
  })
  .listen(3000);
console.log("Listening on port 3000");
