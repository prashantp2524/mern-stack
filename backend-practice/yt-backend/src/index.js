import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";

connectDB();

// import express from "express";
// const app = express();

// async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//         app.on("error", (err) => {
//         console.error("ERROR: ", err);
//         throw err;
//         });
//   } catch (error) {
//     console.error("Error: ", error);
//     throw error;
//   }
// };
