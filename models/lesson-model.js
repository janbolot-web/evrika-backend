import { Schema, model } from "mongoose";

const LessonSchema = new Schema(
  {
    name: { type: String },
    videoUrl: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

export default model("Lesson", LessonSchema);
