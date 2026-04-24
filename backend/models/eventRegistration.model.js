import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  },

  status: {
    type: String,
    enum: ["registered", "attended"],
    default: "registered"
  }

}, { timestamps: true });

export const Registration = mongoose.model("Registration", registrationSchema);