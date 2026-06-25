const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  gptId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GPT",
    required: true,
  },

  fileName: {
    type: String,
    required: true,
  },

  text:{
  type:String
},

  filePath: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model(
  "Document",
  documentSchema
);