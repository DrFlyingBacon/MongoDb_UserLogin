const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  manufacture: {
    type: String,
    default: "",
  },
  yearMade: {
    type: Number,
    default: "",
  },
  yearRetired: {
    type: Number,
    default: "",
  },
  criuseSpeed: {
    type: Number,
    default: "",
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
