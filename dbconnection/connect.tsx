import mongoose from "mongoose";

export const connectDb = async (): Promise<void> => {
  try {
    if (!process.env.DB) {
        throw new Error("DB environment variable is not set");
      }
    const { connection } = await mongoose.connect(process.env.DB, {
      dbName: "PG_FORMS",
    });
    console.log("connected");
    console.log(connection.host);
  } catch (error: any) {
    console.log(error);
    console.log("database error Not connected");
  }
};