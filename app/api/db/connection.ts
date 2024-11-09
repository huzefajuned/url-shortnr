const mongoose = require("mongoose");

export const connectDB = async () => {
  try {
    // Check if already connected to avoid reconnecting
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB.");
      return;
    }
    
    // Connect to MongoDB if not already connected
    const connect = await mongoose.connect(
      "mongodb+srv://huzefaghurna:url910222@cluster0.vlbrg.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Connected to MongoDB:", connect.connection.host);
  } catch (error) {
    console.error("Error in connecting to MongoDB:", error);
  }
};
