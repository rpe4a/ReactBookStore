import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import auth from "./routes/auth";

//* Application settings
dotenv.config();

//* Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING);

const app = express();

//* Setup server
app.use(bodyParser.json()); //* for parse request.body to json
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
  })
);

//* Setup Routing
app.use("/api/auth", auth);

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// eslint-disable-next-line no-console
app.listen(3001, () => console.log("Running on localhost:3001"));
