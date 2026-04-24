import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String

  },

  location: {
    type: String,
    required:true
  },

  date: {
    type: Date,
    requires:true
  },

  time: {
    type: String,
    required:true
  },

  registrations: {
    type: Number,
    default:0
  },

  
  image: {
    type: String
  },

  status: {
    type: String,
    enum: ["upcoming", "completed", "cancelled"],
    default: "upcoming"
  },

   googleFormLink: {
        type: String,
        
    },

  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

export const Event = mongoose.model("Event", eventSchema);