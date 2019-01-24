import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import auth from "./routes/auth";

//* Application settings
const settings = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../settings.json"), "utf8")
);

//* Connect to MongoDB
mongoose.connect(settings.ConnectionString);

const app = express();

//* Setup server
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
  })
);

app.use("/api/auth", auth);

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// eslint-disable-next-line no-console
app.listen(3001, () => console.log("Running on localhost:3001"));
