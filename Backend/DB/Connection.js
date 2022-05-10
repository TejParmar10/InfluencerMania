const mongoose = require("mongoose");
const URI =
  "mongodb+srv://tej:tej@cluster0.jmmdj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async() => {
 await     mongoose.connect(URI, {
    // useUnifiedToplogy: true,
    useNewUrlParser: true
  });
  console.log("db connected..!");
};
module.exports = connectDB;
