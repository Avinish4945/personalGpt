const Document = require("../models/Document");

const uploadDocument = async (req, res) => {
  try {

    const document = await Document.create({
      gptId: req.params.gptId,
      fileName: req.file.originalname,
      filePath: req.file.path,
    });

    res.status(201).json(document);

  } catch(error){

    console.log(error.message);

    return res.status(401).json({
        messagei:error.message
    });

}
};

module.exports = {
  uploadDocument,
};