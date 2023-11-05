import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    profession: { type: String, required: true },
    avatarUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Author", AuthorSchema);
