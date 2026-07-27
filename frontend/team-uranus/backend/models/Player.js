import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    name2: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      required: true,
    },

    badge: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Player", playerSchema);