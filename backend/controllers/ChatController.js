const { GoogleGenAI } = require("@google/genai");
const dotenv = require("dotenv");
const Document = require("../models/Document");

dotenv.config();


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

exports.chat = async (req, res) => {
  try {
    const { message,gptId} = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }
   const docs = await Document.find({ gptId });

let prompt = message;
let context = "";

if (docs.length > 0) {

  context = docs
    .map(doc => doc.text)
    .join("\n\n");

  prompt = `
Use the following documents to answer the question.

Documents:

${context}

Question:

${message}

If the answer is not present in the documents,
say "Information not found in documents".
`;

}


    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  });
      console.log("GPT ID:", gptId);
console.log("Context:", context);

    res.json({
      answer: response.text,
    });



  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};