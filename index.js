import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// require("dotenv").config();

import router from "./router/index.js";

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

const start = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://janbolot:janbolot@cluster0.zbojhsg.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
