var mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: ["true", "Please Enter your Name"],
  },
  email: {
    type: String,
    required: ["true", "Please Enter your Age"],
  },
  subject: {
    type: String,
    required: ["true", "Please Select your Activity"],
  },
  message: {
    type: String,
  },
});
const ContactUser = mongoose.model("ContUser", contactSchema);
module.exports = ContactUser;
