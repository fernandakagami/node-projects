import mongoose from "mongoose";

mongoose.connect("mongodb+srv://fernanda:123@livraria.hph2g72.mongodb.net/livraria");

let db = mongoose.connection;

export default db;