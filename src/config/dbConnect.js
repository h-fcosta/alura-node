import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://h-fcosta:password@cluster0.sywfkwc.mongodb.net/alura-node?"
);

let db = mongoose.connection;

export default db;
