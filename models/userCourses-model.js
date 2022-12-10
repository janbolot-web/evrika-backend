import { Schema, model } from "mongoose";

const UserCoursesSchema = new Schema(
  {
    name: { type: String },
    // price:{type:String},
    lessons: [
      {
        name: { type: String },
        videoUrl: { type: String },
        description: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model("UserCourses", UserCoursesSchema);
