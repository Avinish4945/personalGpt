const GPT = require("../models/GPT");
const Document = require("../models/Document");
const fs = require("fs");

exports.createGPT = async(req,res)=>{

    try{

        const {
            name,
            institutionType,
            description
        } = req.body;

        const gpt =
        await GPT.create({

            name,
            institutionType,
            description,

            owner:req.user.id

        });

        res.status(201).json(gpt);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });
        console.log(error)

    }

};

exports.getMyGPTs = async(req,res)=>{

    try{

        const gpts =
        await GPT.find({

            owner:req.user.id

        });

        res.status(200).json(gpts);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

exports.getSingleGPT = async(req,res)=>{

    try{

        const gpt =
        await GPT.findById(
            req.params.id
        );

        if(!gpt){

            return res.status(404).json({
                message:"GPT not found"
            });

        }

        res.status(200).json(gpt);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
exports.deleteGPT = async (req, res) => {

  try {

    const gpt = await GPT.findOne({
      _id: req.params.id,
      owner: req.user.id
    });

    if (!gpt) {

      return res.status(404).json({
        message: "GPT not found"
      });

    }

    // Find all documents of this GPT
    const documents = await Document.find({
      gptId: gpt._id
    });

    // Delete files from uploads folder
    for (const doc of documents) {

      if (fs.existsSync(doc.filePath)) {
        fs.unlinkSync(doc.filePath);
      }

    }

    // Delete document records
    await Document.deleteMany({
      gptId: gpt._id
    });

    // Delete GPT
    await GPT.findByIdAndDelete(
      gpt._id
    );

    res.json({
      message: "GPT deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};