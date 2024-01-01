import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lovercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lovercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
