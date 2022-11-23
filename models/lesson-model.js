import { Schema, model } from "mongoose";

const LessonSchema = new Schema(
  {
    name: { type: String, required: true },
    videoUrl: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Lesson", LessonSchema);
