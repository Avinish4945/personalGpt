const mongoose = require("mongoose");

const gptSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    institutionType:{
        type:String,
        required:true
    },

    description:{
        type:String,
        default:""
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{
    timestamps:true
});

module.exports =
mongoose.model("GPT",gptSchema);