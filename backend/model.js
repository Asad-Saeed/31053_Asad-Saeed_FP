var mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: ["true", "Please Enter your Name"],
  },
  age: {
    type: Number,
    required: ["true", "Please Enter your Age"],
    min: 10,
    max: 100,
    default: 0,
  },
  activity: {
    type: String,
    required: ["true", "Please Select your Activity"],
  },
  discription: {
    type: String,
  },
  duration: {
    type: Number,
    required: ["true", "Please Enter your workout Duration"],
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now(),
    required: ["true", "Please Select Date"],
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
