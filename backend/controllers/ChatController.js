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
You are InstitutionGPT, an AI assistant.

You have two sources of knowledge:

1. Uploaded institution documents.
2. Your own general knowledge.

Uploaded Documents:
--------------------
${context}
--------------------

User Question:
${message}

Instructions:

- Search the uploaded documents first.
- If the documents contain the answer, answer using them.
- If the documents DO NOT contain the answer, DO NOT say "Information not found".
- Instead, answer using your own knowledge.
- When answering from your own knowledge, start with:
  "📌 General Knowledge:"
- Never refuse unless you genuinely don't know the answer.
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