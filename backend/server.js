import dotenv from "dotenv";
import express from "express";
import productRoutes from "./routes/productRoutes.js"
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("api/products", productRoutes);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server started at port ${process.env.PORT}`)
});