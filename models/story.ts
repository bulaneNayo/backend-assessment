export {};
const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },

  popularity: {
    type: Number,
    default: 0,
  },
});
mongoose.models = {};
module.exports = mongoose.models.Story || mongoose.model("Story", storySchema);
