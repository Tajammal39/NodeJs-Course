const mongoose = require("mongoose");

// Use Schema with the correct capitalization
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema({
  name: {
    type: String, // Correct key is `type`, not `typeof`
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the user model
const userModel = mongoose.model("users", userSchema);

// Export the model
module.exports = userModel;
