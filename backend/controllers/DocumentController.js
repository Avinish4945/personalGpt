const Document = require("../models/Document");
const pdf = require("pdf-parse");
const fs = require("fs");






const uploadDocument = async (req, res) => {
  
  try {

    // PDF file read
    const dataBuffer =
      fs.readFileSync(req.file.path);

    // Extract text
    const data =
      await pdf(dataBuffer);

    const document =
      await Document.create({

        gptId: req.params.gptId,

        fileName:
          req.file.originalname,

        filePath:
          req.file.path,

        text:
          data.text

      });

    res.status(201).json(document);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};

const getDocuments = async (req, res) => {
  try {

    const documents =
      await Document.find({
        gptId: req.params.gptId
      });

    res.json(documents);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


const deleteDocument = async (req, res) => {

  try {

    const document =
      await Document.findById(
        req.params.documentId
      );

    if (!document) {
      return res.status(404).json({
        message: "Document not found"
      });
    }

    fs.unlinkSync(document.filePath);

    await Document.findByIdAndDelete(
      req.params.documentId
    );

    res.json({
      message: "Document deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  uploadDocument,getDocuments,deleteDocument
};