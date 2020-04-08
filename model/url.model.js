const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema(
  {
    originalurl: {
      type: String,
      required: true
    },
    shorturl: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Url = mongoose.model("Url", urlSchema);
module.exports = Url;
