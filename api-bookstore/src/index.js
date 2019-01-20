import express from "express";
import cors from "cors";
import path from "path";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
  })
);

app.post("/api/auth", (req, res) => {
  res.status(400).json({ errors: { global: "Invalid credentials" } });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3001, () => console.log("Running on localhost:3001"));
