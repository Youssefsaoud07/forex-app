const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String ,
  phoneNumber: Number,
  password: String,
  profession: { type :String ,default: "Junior-Broker"},
  photo : String ,
  solde : Number,
  date : Date,
  entreprise : { type :String ,default: "IQ Concept"},
  age : Number,
  
  
});

module.exports = User = mongoose.model("user", userSchema);
