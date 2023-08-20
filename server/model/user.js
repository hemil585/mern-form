const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: {
    type: Schema.Types.Mixed,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

exports.User = mongoose.model("User", userSchema);
