import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";


const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();


app.use(express.json()); //to parse the incoming request with JSON payload (from req.body)
app.use(cookieParser()); 

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users", userRoutes);




app.get("/", (req, res) => {
  // root route http://localhost:5000
   res.send("hello world!");
 });




app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`server running on port ${PORT}`)
});
