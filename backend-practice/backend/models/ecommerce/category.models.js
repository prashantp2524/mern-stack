import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timeseries: true }
);

const Category = mongoose.model("Category", categorySchema);
