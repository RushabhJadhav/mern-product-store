import dotenv from "dotenv";
import express from "express";
import productRoutes from "./routes/productRoutes.js"
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at port ${PORT}`)
});