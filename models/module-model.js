import { Schema, model } from "mongoose";

const ModuleSchema = new Schema(
  {
    name: { type: String },
    lessons: [
      {
        type: Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model("Module", ModuleSchema);
