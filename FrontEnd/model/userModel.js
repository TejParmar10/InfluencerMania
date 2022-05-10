const mongoose = require("../DB/database");
// create an schema
var userSchema = new mongoose.Schema({
            FirstName: String,
            lastName: String,
            UserName: String,
            password: String,
            email:String
        }); 
var userModel=mongoose.model('users',userSchema);

module.exports = mongoose.model("Users", userModel);