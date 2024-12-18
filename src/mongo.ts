import mongoose from "mongoose";

export function dbConnection() {
  return mongoose.connect(
    "mongodb+srv://Parafacio:1123800118@cluster0.u8mzy.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0"
  );
}
