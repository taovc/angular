const mongoose = require("mongoose");

const UserData = mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, required: true },
  }
);

module.exports = {
  UserData: mongoose.model("UserData", UserData),
};
