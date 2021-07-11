const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  datePublished: { type: Date, required: true },
  
});

module.exports = mongoose.model("story", storySchema);