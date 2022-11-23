import { Schema, model } from "mongoose";

const CourseSchema = new Schema(
  {
    title: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    previewImgUrl: { type: String, required: true },
    previewVideoUrl: { type: String, required: true },
    authorName: { type: String, required: true },
    authorProfession: { type: String, required: true },
    authors: [{ type: Schema.Types.ObjectId, ref: "Author" }],
    lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
  },
  {
    timestamps: true,
  }
);

export default model("Course", CourseSchema);
