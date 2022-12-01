export {};
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  country: {
    type: String,
  },

  password: {
    type: String,
  },
});
mongoose.models = {};
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
