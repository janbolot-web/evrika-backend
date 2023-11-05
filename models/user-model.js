import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    courses: [
      {
        name: { type: String },
        courseId: { type: String, default: "" },
        price: { type: String },
        isAccess: { type: Boolean, default: false },
        lessons: [
          {
            name: { type: String },
            videoUrl: { type: String },
            description: { type: String },
          },
        ],
      },
    ],
    roles: [{ type: String, ref: "Role" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);

// courses: [
//   {
//     courseId: { type: String },
//     modules: [
//       {
//         name: { type: String },
//         isAccess: { type: Boolean, default: false },
//         lessons: [
//           {
//             name: { type: String },
//             videoUrl: { type: String },
//             description: { type: String },
//           },
//         ],
//       },
//     ],
//   },
// ],
