import { Schema, model } from "mongoose";

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
    profession: { type: String, required: true },
    avatarUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Author", AuthorSchema);
