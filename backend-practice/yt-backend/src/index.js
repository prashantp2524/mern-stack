import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env" });

connectDB()
  .then((res) => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB CONNECTION FAILED: " + error);
  });

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
