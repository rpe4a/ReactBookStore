import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true }
  }
);

export default mongoose.model("User", schema);
