// models/Url.js
import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '7d'  // optional: set an expiry of 7 days for each short URL
  }
});

export const UrlModel = mongoose.model("url", urlSchema);
