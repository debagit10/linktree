const mongoose = require("mongoose");

const linkSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;
