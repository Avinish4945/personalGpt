const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const chatRoutes = require("./routes/chatRoutes");

const connectDB =
  require("./config/db");

dotenv.config();
console.log("SERVER GEMINI:", process.env.GEMINI_API_KEY);
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
"/api/gpts",
require("./routes/gptRoutes")
);

app.use(
  "/api/chatg",
  require("./routes/chatRoutes")
);

app.listen(
  process.env.PORT,
  () => {
    console.log(
      `Server running on ${process.env.PORT}`
    );
  }
);