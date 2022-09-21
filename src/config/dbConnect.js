import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://h-fcosta:rick1994@cluster0.sywfkwc.mongodb.net/alura-node?"
);

let db = mongoose.connection;

export default db;
