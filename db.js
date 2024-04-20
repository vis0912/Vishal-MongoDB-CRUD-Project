import mongoose from "mongoose";

const DB_NAME = "crud";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    .then((db) => console.log("MongoDB Connected: "));
  } catch (err) {
    console.error("MongoDB FAILED!",err);
    process.exit(1);
  };
};

export {connectDB}