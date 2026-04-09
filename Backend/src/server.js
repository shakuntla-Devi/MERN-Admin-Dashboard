import express from "express"

import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"
import connectDB from "./Config/db.js"
import dotenv from "dotenv";

const FRONTEND_URL = "https://mern-admin-dashboard-lime.vercel.app";
dotenv.config();
const app = express()
app.use(cors({
  origin: [FRONTEND_URL, "http://localhost:5173"] // Local frontend URL + live URL
}));
app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)
app.use("/api/dashboard", dashboardRoutes)
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});
connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
