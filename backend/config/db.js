const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://Deba:1234@cluster0.uyr1rdy.mongodb.net/linktree?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit();
  }
};

module.exports = connectDB;
