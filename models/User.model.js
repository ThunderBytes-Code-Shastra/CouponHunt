const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  avatar: {
    type: String,
  },
  card: [
    {
      type: String,
      bankName: String,
      offer: [mongoose.SchemaTypes.ObjectId],
    },
  ],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
