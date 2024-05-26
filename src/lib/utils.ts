import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

export const connectDB = async () => {
  try {
    if (process.env.MONGO_URI === undefined) {
      throw new Error("MONGO_URI is not defined");
    }

    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {});
    connection.isConnected = conn.connections[0].readyState;

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
  }
};
